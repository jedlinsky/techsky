import type { ResolveHasRule } from './types'

const resolveHasRule: ResolveHasRule = function ({ rules = {} }) {
  return {
    abbreviationsAllowList: 'abbreviationsAllowList' in rules && rules.abbreviationsAllowList.length !== 0,
    additionalReactHooks: 'additionalReactHooks' in rules && rules.additionalReactHooks.length !== 0,
    ignorePropertiesNamingConvention: 'ignorePropertiesNamingConvention' in rules,
    noRestrictedImports: 'noRestrictedImports' in rules && rules.noRestrictedImports.length !== 0,
    noSecretsExcludeDirs: 'noSecretsExcludeDirs' in rules && rules.noSecretsExcludeDirs.length !== 0,
    reactForbidElements: 'reactForbidElements' in rules,
    reactI18n: 'reactI18n' in rules,
    restrictImports: 'restrictImports' in rules,
    todos: 'todos' in rules
  }
}

export { resolveHasRule }
