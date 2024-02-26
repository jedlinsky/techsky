import type { ResolveExtensions } from './types'

const resolveExtensions: ResolveExtensions = function ({ extensions, has, resolvedResolverProps }) {
  if (resolvedResolverProps.extensions === null) {
    return null
  }

  if (resolvedResolverProps.extensions) {
    return resolvedResolverProps.extensions
  }

  const includeJavaScriptWhenTypeScript = has.typescript && resolvedResolverProps.includeJavaScriptWhenTypeScript
  const includeJson = resolvedResolverProps.includeJson ?? false
  const includeReact = has.package.react && resolvedResolverProps.includeReact

  return [
    ...(includeJavaScriptWhenTypeScript ? extensions.standardJavaScript : []),
    ...extensions.resolvedStandard,
    ...(includeReact
      ? [...(includeJavaScriptWhenTypeScript ? extensions.reactJavaScript : []), ...extensions.resolvedReact]
      : []),
    ...(includeJson ? [...extensions.json, ...extensions.jsonc] : [])
  ]
}

export { resolveExtensions }
