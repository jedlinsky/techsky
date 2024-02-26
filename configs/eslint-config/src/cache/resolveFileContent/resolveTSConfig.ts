import { parseTsconfig as parseTSConfig } from 'get-tsconfig'
import type { ResolveTSConfig } from './types'

const resolveTSConfig: ResolveTSConfig = function ({ absolutePath }) {
  try {
    return parseTSConfig(absolutePath)
  } catch {
    return null
  }
}

export { resolveTSConfig }
