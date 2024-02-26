import { resolve } from 'node:path'
import type { IsPathInsideOutDir } from './types.js'

const isPathInsideOutDir: IsPathInsideOutDir = function ({ outDir, path }) {
  const absoluteOutDir = resolve(outDir)

  return path.startsWith(absoluteOutDir)
}

export { isPathInsideOutDir }
