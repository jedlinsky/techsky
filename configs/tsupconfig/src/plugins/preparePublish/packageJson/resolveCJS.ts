import { resolveDeclarationExtension } from 'resolvePath/resolveDeclarationExtension.js'
import type { CJSExports, ResolveCJS } from './types.js'

const resolveCJS: ResolveCJS = function ({ hasDTS, isBrowser, isEntryEmptyCheck, mainEntry, resolvedExports }) {
  const exports =
    resolvedExports === null
      ? undefined
      : Object.entries(resolvedExports).reduce<CJSExports>((accumulator, [key, value]) => {
          const isEntryEmpty = isEntryEmptyCheck(value)

          const resolvedValue: Exclude<CJSExports, undefined>[string] = {
            ...(hasDTS ? { types: resolveDeclarationExtension(value) } : {}),
            ...(isEntryEmpty ? {} : isBrowser ? { browser: value } : { require: value })
          }

          return { ...accumulator, [key]: resolvedValue }
        }, {})

  const isMainEntryEmpty = isEntryEmptyCheck(mainEntry)

  return {
    type: resolvedExports === null ? undefined : 'commonjs',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    exports,
    ...(isMainEntryEmpty ? {} : { main: mainEntry as string }),
    ...(hasDTS ? { types: resolveDeclarationExtension(mainEntry as string) } : {})
  }
}

export { resolveCJS }
