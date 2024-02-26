import type { ResolveCurrentDirectoryNotation } from './types'

const resolveCurrentDirectoryNotation: ResolveCurrentDirectoryNotation = function ({ currentDirectoryNotation, path }) {
  if (path === './') {
    return path
  }

  if (currentDirectoryNotation) {
    return path.startsWith('./') ? path : `./${path}`
  }

  return path.startsWith('./') ? path.slice(2) : path
}

export { resolveCurrentDirectoryNotation }
