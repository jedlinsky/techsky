import { resolveCodeTypeFromAnsiString } from './resolveCodeTypeFromAnsiString.js'
import type { AnsiObject, AnsiStringToObject } from './types.js'

const ansiStringToObject: AnsiStringToObject = function (ansiString) {
  const codeType = resolveCodeTypeFromAnsiString(ansiString)

  const capitalizedValue = ansiString.replace(codeType, '')

  const value = `${capitalizedValue.charAt(0).toLowerCase()}${capitalizedValue.slice(1)}`

  if (codeType === 'bg' || codeType === 'color') {
    return {
      [codeType]: value
    } as unknown as AnsiObject
  }

  return {
    [codeType]: {
      [value]: true
    }
  } as unknown as AnsiObject
}

export { ansiStringToObject }
