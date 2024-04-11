import { resolveDeclarationExtension } from 'resolvePath/resolveDeclarationExtension.js'
import { resolveIncludeCJSBundlePath } from './resolveIncludeCJSBundlePath.js'
import type { ESMExports, ResolveESM } from './types.js'

const resolveESM: ResolveESM = function ({
  hasDTS,
  includeCJSBundle,
  includeCJSBundleEntry,
  isBrowser,
  isEntryEmptyCheck,
  mainEntry,
  resolvedExports,
  srcDir
}) {
  const exports =
    resolvedExports === null
      ? undefined
      : mainEntry === null
        ? resolvedExports
        : Object.entries(resolvedExports).reduce<ESMExports>((accumulator, [key, value]) => {
            const isEntryEmpty = isEntryEmptyCheck(value)

            const resolvedValue: Exclude<ESMExports, undefined>[string] = {
              ...(hasDTS ? { types: resolveDeclarationExtension(value) } : {}),
              ...(isEntryEmpty ? {} : isBrowser ? { browser: value } : { import: value }),
              ...(includeCJSBundle && key === '.'
                ? { require: resolveIncludeCJSBundlePath({ includeCJSBundleEntry, srcDir }) }
                : {})
            }

            return { ...accumulator, [key]: resolvedValue }
          }, {})

  return {
    type: resolvedExports === null ? undefined : 'module',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    exports
  }
}

export { resolveESM }
