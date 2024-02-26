import { sys } from 'typescript'
import type { GetFileContent } from './types.js'

const getFileContent: GetFileContent = function ({ path }) {
  return sys.readFile(path) ?? null
}

export { getFileContent }
