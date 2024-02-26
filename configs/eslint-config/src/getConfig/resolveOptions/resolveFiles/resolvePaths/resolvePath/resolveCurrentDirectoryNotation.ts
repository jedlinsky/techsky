import type { ResolveCurrentDirectoryNotation } from './types'

const resolveCurrentDirectoryNotation: ResolveCurrentDirectoryNotation = function ({ paths, resolvedResolverProps }) {
  return paths.map((path) => {
    const withoutCurrentDirectoryNotation = path.startsWith('./') ? path.slice(2) : path

    return resolvedResolverProps.prependCurrentDirectoryNotation
      ? `./${withoutCurrentDirectoryNotation}`
      : withoutCurrentDirectoryNotation
  })
}

export { resolveCurrentDirectoryNotation }
