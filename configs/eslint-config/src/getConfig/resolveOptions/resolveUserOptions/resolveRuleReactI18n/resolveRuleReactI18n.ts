import { resolveOptions } from './resolveOptions'
import type { ResolveRuleReactI18n } from './types'

const resolveRuleReactI18n: ResolveRuleReactI18n = function (props) {
  if (props === null) {
    return null
  }

  return resolveOptions(props)
}

export { resolveRuleReactI18n }
