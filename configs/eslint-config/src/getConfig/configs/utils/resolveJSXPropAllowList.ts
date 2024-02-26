import type { ResolveJSXPropAllowList } from './types'

const resolveJSXPropAllowList: ResolveJSXPropAllowList = function (options) {
  if (!options.has.package.react && !options.has.package.mui) {
    return null
  }

  return ['sx']
}

export { resolveJSXPropAllowList }
