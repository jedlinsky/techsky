import type { DefinedOptions } from 'getConfig/resolveOptions/types'
import type { ResolveNamingConventionExclude } from './types'

const resolveNamingConventionExclude: ResolveNamingConventionExclude = function (options) {
  const hasIgnorePropertiesNamingConvention = options.has.rule.ignorePropertiesNamingConvention
  const hasMui = options.has.package.mui
  const hasNext = options.has.package.next

  if (!hasIgnorePropertiesNamingConvention && !hasMui && !hasNext) {
    return null
  }

  const patterns = [
    ...(hasIgnorePropertiesNamingConvention
      ? [(options as DefinedOptions).rules.ignorePropertiesNamingConvention]
      : []),
    ...(hasMui ? ['(^Mui)|(Component$)'] : []),
    ...(hasNext ? ['^(DELETE|GET|HEAD|OPTIONS|PATCH|POST|PUT)$'] : [])
  ]

  return patterns.map((pattern) => `(${pattern})`).join('|')
}

export { resolveNamingConventionExclude }
