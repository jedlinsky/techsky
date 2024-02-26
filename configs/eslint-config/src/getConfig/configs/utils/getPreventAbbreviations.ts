import { resolvePreventAbbreviationsAllowList } from './resolvePreventAbbreviationsAllowList'
import type { GetPreventAbbreviations } from './types'

const getPreventAbbreviations: GetPreventAbbreviations = function (options) {
  const allowList = resolvePreventAbbreviationsAllowList(options)

  return [
    'error',
    {
      ...(allowList ? { allowList } : {}),
      checkDefaultAndNamespaceImports: false,
      checkShorthandImports: false,
      replacements: {
        args: false,
        dir: false,
        dist: false,
        env: false,
        mod: false,
        param: false,
        params: false,
        prop: false,
        props: false,
        ref: false,
        req: false,
        res: false,
        src: false,
        var: false,
        vars: false
      }
    }
  ]
}

export { getPreventAbbreviations }
