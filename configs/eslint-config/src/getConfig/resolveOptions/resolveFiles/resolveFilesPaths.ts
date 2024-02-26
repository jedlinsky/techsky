import { resolveExtensions } from './resolveExtensions'
import { resolveFilesPathsSegments } from './resolveFilesPathsSegments'
import { resolveResolverProps } from './resolveResolverProps'
import type { ResolveFilesPathsProps, ResolvePathReturnType } from './types'

const resolveFilesPaths = function <TResolveFilesPathsProps extends ResolveFilesPathsProps>({
  extensions,
  has,
  paths,
  resolverProps
}: TResolveFilesPathsProps): ResolvePathReturnType<TResolveFilesPathsProps['resolverProps']> {
  if (resolverProps.paths === null) {
    return null as ResolvePathReturnType<TResolveFilesPathsProps['resolverProps']>
  }

  const resolvedResolverProps = resolveResolverProps({ resolverProps })
  const resolvedExtensions = resolveExtensions({ extensions, has, resolvedResolverProps })
  const resolvedFilesPaths = resolveFilesPathsSegments({ paths, resolvedExtensions, resolvedResolverProps })

  return [...new Set(resolvedFilesPaths)]
}

export { resolveFilesPaths }
