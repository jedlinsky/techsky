// https://github.com/prettier/prettier/blob/3.0.3/src/utils/require-from-file.js
import { createRequire } from 'node:module'
import type { ConfigWithSchema, RequireFromFile } from './types.js'

const requireFromFile: RequireFromFile = function (id, filePath) {
  const require = createRequire(filePath)

  return require(id) as ConfigWithSchema
}

export { requireFromFile }
