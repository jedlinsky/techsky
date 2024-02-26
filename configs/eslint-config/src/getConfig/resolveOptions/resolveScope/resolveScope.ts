import type { ResolveScope } from './types'

const resolveScope: ResolveScope = function ({ npmScope, packageJson }) {
  if (npmScope) {
    return npmScope.startsWith('@') ? npmScope.slice(1) : npmScope
  }

  if (!packageJson.name?.startsWith('@')) {
    return null
  }

  return packageJson.name.slice(1).split('/').at(0) as string
}

export { resolveScope }
