import type { DefinedOptions } from 'getConfig'
import type { ResolvePreventAbbreviationsAllowList } from './types'

const resolvePreventAbbreviationsAllowList: ResolvePreventAbbreviationsAllowList = function (options) {
  const hasAllowList = options.has.rule.abbreviationsAllowList
  const hasTanstackReactQuery = options.has.package.tanstackReactQuery

  if (!hasAllowList && !hasTanstackReactQuery) {
    return null
  }

  const abbreviationsAllowList = hasAllowList
    ? (options as DefinedOptions).rules.abbreviationsAllowList.reduce((accumulator, key) => {
        return {
          ...accumulator,
          [key]: true
        }
      }, {})
    : null

  const tanstackReactQueryAllowList = hasTanstackReactQuery
    ? ({
        mutationFn: true,
        queryFn: true
      } as const)
    : null

  return {
    ...abbreviationsAllowList,
    ...tanstackReactQueryAllowList
  }
}

export { resolvePreventAbbreviationsAllowList }
