import { resolvePathInner } from './resolvePathInner.js'
import type { ResolvePath } from './types.js'

const resolvePath: ResolvePath = function ({ path, prepend }) {
  if (typeof path === 'string') {
    return resolvePathInner({ path, prepend })
  }

  return path.map((path) => resolvePathInner({ path, prepend }))
}

export { resolvePath }
