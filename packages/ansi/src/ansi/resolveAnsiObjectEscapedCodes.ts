import { code } from './code.js'
import { escapeCode } from './escapeCode.js'
import type {
  AnsiObjectEntries,
  AnsiObjectEscapedCodes,
  AnsiObjectKeys,
  ResolveAnsiObjectEscapedCodes
} from './types.js'

const resolveAnsiObjectEscapedCodes: ResolveAnsiObjectEscapedCodes = function (ansiObject) {
  const ansiObjectEntries = Object.entries(ansiObject) as AnsiObjectEntries

  return ansiObjectEntries.reduce<AnsiObjectEscapedCodes>((accumulator, [key, values]) => {
    const codeType = code[key]

    const resolvedValues =
      typeof values === 'string'
        ? [escapeCode(codeType[values as keyof typeof codeType])]
        : (Object.keys(values) as AnsiObjectKeys).map((valueKey) => {
            const resolvedCode = codeType[valueKey as keyof typeof codeType] as number

            return escapeCode(resolvedCode)
          })

    return { ...accumulator, [key]: resolvedValues }
  }, {})
}

export { resolveAnsiObjectEscapedCodes }
