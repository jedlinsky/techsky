import { resolveCJS } from './resolveCJS.js'
import { resolveESM } from './resolveESM.js'
import type { ResolveModule } from './types.js'

const resolveModule: ResolveModule = function ({
  format,
  hasDTS,
  includeCJSBundle,
  includeCJSBundleEntry,
  isBrowser,
  isEntryEmptyCheck,
  mainEntry,
  resolvedExports,
  srcDir
}) {
  return format === 'cjs'
    ? resolveCJS({ hasDTS, isBrowser, isEntryEmptyCheck, mainEntry, resolvedExports })
    : resolveESM({
        hasDTS,
        includeCJSBundle,
        includeCJSBundleEntry,
        isBrowser,
        isEntryEmptyCheck,
        resolvedExports,
        srcDir
      })
}

export { resolveModule }
