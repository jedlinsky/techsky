import type { ResolveDeleteEmptyEmittedFiles } from './types.js'

const resolveDeleteEmptyEmittedFiles: ResolveDeleteEmptyEmittedFiles = function ({ deleteEmptyEmittedFiles }) {
  return deleteEmptyEmittedFiles ?? true
}

export { resolveDeleteEmptyEmittedFiles }
