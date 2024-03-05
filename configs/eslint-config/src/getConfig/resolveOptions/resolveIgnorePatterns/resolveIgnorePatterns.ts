import { resolvePath } from './resolvePath'
import type { IgnorePatterns, ResolveIgnorePatterns } from './types'

const resolveIgnorePatterns: ResolveIgnorePatterns = function ({ ignore }) {
  if (ignore === undefined || ignore.length === 0) {
    return null
  }

  return ignore.reduce<Exclude<IgnorePatterns, null>>((accumulator, path) => {
    const resolvedPath = resolvePath(path)

    if (resolvedPath === null) {
      return accumulator
    }

    return [...accumulator, resolvedPath]
  }, [])
}

export { resolveIgnorePatterns }
