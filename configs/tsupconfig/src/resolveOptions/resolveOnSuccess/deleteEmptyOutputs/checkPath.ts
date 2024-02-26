import { isPathInsideOutDir } from './isPathInsideOutDir.js'
import type { CheckPath } from './types.js'

const checkPath: CheckPath = function ({ outDir, path }) {
  if (isPathInsideOutDir({ outDir, path })) {
    return
  }

  throw new Error(`Path ${path} is outside of output directory ${outDir}`)
}

export { checkPath }
