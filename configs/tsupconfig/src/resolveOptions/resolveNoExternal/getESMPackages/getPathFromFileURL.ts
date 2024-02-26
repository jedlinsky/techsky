import { fileURLToPath } from 'node:url'
import type { GetPathFromFileURL } from './types.js'

const getPathFromFileURL: GetPathFromFileURL = function ({ dependencyURL }) {
  try {
    return fileURLToPath(dependencyURL)
  } catch {
    return null
  }
}

export { getPathFromFileURL }
