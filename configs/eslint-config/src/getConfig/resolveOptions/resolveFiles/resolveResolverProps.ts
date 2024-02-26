import type { ResolveResolverProps } from './types'

const resolveResolverProps: ResolveResolverProps = function ({ resolverProps }) {
  return {
    ...resolverProps,
    fileNames: resolverProps.fileNames ?? [],
    includeJavaScriptWhenTypeScript: resolverProps.includeJavaScriptWhenTypeScript ?? false,
    paths: resolverProps.paths ?? ['./'],
    prependCurrentDirectoryNotation: resolverProps.prependCurrentDirectoryNotation ?? false,
    prependForwardSlash: resolverProps.prependForwardSlash ?? false
  }
}

export { resolveResolverProps }
