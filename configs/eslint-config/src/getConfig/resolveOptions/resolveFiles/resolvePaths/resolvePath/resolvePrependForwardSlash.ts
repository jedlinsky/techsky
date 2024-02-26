import type { ResolvePrependForwardSlash } from './types'

const resolvePrependForwardSlash: ResolvePrependForwardSlash = function ({
  resolvedCurrentDirectoryNotation,
  resolvedResolverProps
}) {
  return resolvedCurrentDirectoryNotation.map((path) => (resolvedResolverProps.prependForwardSlash ? `/${path}` : path))
}

export { resolvePrependForwardSlash }
