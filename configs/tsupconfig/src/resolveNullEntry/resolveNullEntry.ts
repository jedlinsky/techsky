import { join } from 'node:path'
import { logger } from 'logger/index.js'
import { copyOnSuccess } from 'plugins/index.js'
import { writePackageJson } from 'plugins/preparePublish/packageJson/writePackageJson.js'
import { execute } from 'resolveOptions/resolveOnSuccess/execute/execute.js'
import type { ResolveNullEntry } from './types.js'

const resolveNullEntry: ResolveNullEntry = async function (options) {
  logger({
    silent: options.silent,
    text: 'Entry: null'
  })

  // eslint-disable-next-line functional/no-expression-statements
  await writePackageJson({
    ...options,
    emptyEmittedFiles: null
  })

  logger({
    silent: options.silent,
    text: join(options.outDir, 'package.json'),
    type: options.format
  })

  // eslint-disable-next-line functional/no-expression-statements
  await copyOnSuccess({ augmentation: options.augmentation, copy: options.copy, silent: options.silent })

  const { executeOnWatch, mainEntry, onSuccess, outDir, watch } = options

  const cleanup = await execute({ executeOnWatch, mainEntry, onSuccess, outDir, watch })

  if (cleanup) {
    // eslint-disable-next-line functional/no-expression-statements
    await cleanup()
  }
}

export { resolveNullEntry }
