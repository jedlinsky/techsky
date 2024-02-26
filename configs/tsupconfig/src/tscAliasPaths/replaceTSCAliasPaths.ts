import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { bundleRequire } from 'bundle-require'
import { getTsconfig as getTSConfig } from 'get-tsconfig'
import { replaceTscAliasPaths } from 'tsc-alias'
import { Output } from 'tsc-alias/dist/utils/output.js'
import { logger } from 'logger/index.js'
import { removeReplacer } from './removeReplacer.js'
import { resolveBaseUrlReplacerPaths } from './resolveBaseUrlReplacerPaths.js'
import type { ReplaceTSCAliasPaths } from './types.js'

const replaceTSCAliasPaths: ReplaceTSCAliasPaths = async function ({ outDir, silent }) {
  const tscAliasPathsDirectoryPath = dirname(fileURLToPath(import.meta.url))

  const baseUrlReplacerPaths = await resolveBaseUrlReplacerPaths({ tscAliasPathsDirectoryPath })
  const bundledBaseUrlReplacerPath = resolve(outDir, '__baseUrlReplacer.bundled.cjs')

  const tsConfigSearchPath = resolve(tscAliasPathsDirectoryPath, '..')

  const tsConfig = getTSConfig(tsConfigSearchPath)

  if (tsConfig === null) {
    throw new Error('Unable to find tsconfig.json.')
  }

  if (baseUrlReplacerPaths.sourcePath) {
    // eslint-disable-next-line functional/no-expression-statements
    await bundleRequire({
      filepath: baseUrlReplacerPaths.sourcePath,
      format: 'cjs',
      getOutputFile: () => bundledBaseUrlReplacerPath,
      preserveTemporaryFile: true,
      tsconfig: tsConfig.path
    })
  }

  const replacers = [baseUrlReplacerPaths.distPath ?? bundledBaseUrlReplacerPath]

  const output = new Output(true)

  // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
  output.info = function (message) {
    const normalized = message.toLowerCase()

    const isInfo = normalized.includes('added replacer') ? true : false

    logger({
      silent,
      text: message,
      type: isInfo ? 'tsa-info' : 'tsa'
    })
  }

  try {
    // eslint-disable-next-line functional/no-expression-statements
    await replaceTscAliasPaths({
      outDir,
      output,
      replacers
    })
  } catch (error) {
    // eslint-disable-next-line functional/no-expression-statements
    await removeReplacer({ baseUrlReplacerPaths, bundledBaseUrlReplacerPath, silent })

    throw error
  }

  // eslint-disable-next-line functional/no-expression-statements
  await removeReplacer({ baseUrlReplacerPaths, bundledBaseUrlReplacerPath, silent })
}

export { replaceTSCAliasPaths }
