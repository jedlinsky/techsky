// https://github.com/prettier/prettier/blob/3.0.3/src/config/resolve-config.js
import { getExplorer } from './getExplorer/index.js'
import type { ResolveConfigFile } from './types.js'

const resolveConfigFile: ResolveConfigFile = function (filePath) {
  const { search } = getExplorer({ cache: false })

  const result = search(filePath)

  return result?.filepath ?? null
}

export { resolveConfigFile }
