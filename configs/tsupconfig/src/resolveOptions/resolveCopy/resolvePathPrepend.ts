import type { ResolvePathPrepend } from './types.js'

const resolvePathPrepend: ResolvePathPrepend = function (path, prepend) {
  if (!prepend) {
    return path
  }

  if (path.startsWith('!./')) {
    return path.replace('!./', `!./${prepend}/`)
  }

  return path.replace('./', `./${prepend}/`)
}

export { resolvePathPrepend }
