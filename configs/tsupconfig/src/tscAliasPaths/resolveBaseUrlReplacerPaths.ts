import { resolve } from 'node:path'
import { fileExists } from './fileExists.js'
import type { ResolveBaseUrlReplacerPaths } from './types.js'

const resolveBaseUrlReplacerPaths: ResolveBaseUrlReplacerPaths = async function ({ tscAliasPathsDirectoryPath }) {
  const directory = resolve(tscAliasPathsDirectoryPath, 'baseUrlReplacer')

  const distPath = resolve(directory, 'baseUrlReplacer.js')
  const distPathCJS = resolve(directory, 'baseUrlReplacer.cjs')
  const sourcePath = resolve(directory, 'baseUrlReplacer.ts')

  const [distPathExists, distPathCJSExists, sourcePathExists] = await Promise.all([
    fileExists(distPath),
    fileExists(distPathCJS),
    fileExists(sourcePath)
  ])

  return {
    distPath: distPathExists ? distPath : distPathCJSExists ? distPathCJS : null,
    sourcePath: sourcePathExists ? sourcePath : null
  }
}

export { resolveBaseUrlReplacerPaths }
