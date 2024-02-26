import { resolvePath } from './resolvePath'
import { resolveRuleReactI18n } from './resolveRuleReactI18n'
import type { ResolveUserOptionsRules } from './types'

const resolveUserOptionsRules: ResolveUserOptionsRules = function ({ rules }) {
  const noSecretsExcludeDirectories = rules?.noSecretsExcludeDirs?.map(resolvePath)

  return {
    ...rules,
    ...(noSecretsExcludeDirectories ? { noSecretsExcludeDirs: noSecretsExcludeDirectories } : {}),
    reactForbidElements: rules?.reactForbidElements ?? 'all',
    reactI18n: resolveRuleReactI18n(rules?.reactI18n ?? null)
  }
}

export { resolveUserOptionsRules }
