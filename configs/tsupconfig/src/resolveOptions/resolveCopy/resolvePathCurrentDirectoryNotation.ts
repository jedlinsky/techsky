import type { ResolvePathCurrentDirectoryNotation } from './types.js'

const resolvePathCurrentDirectoryNotation: ResolvePathCurrentDirectoryNotation = function (path) {
  if (path.startsWith('./') || path.startsWith('!./')) {
    return path
  }

  if (path.startsWith('!')) {
    return path.replace('!', '!./')
  }

  return `./${path}`
}

export { resolvePathCurrentDirectoryNotation }
