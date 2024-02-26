import type { ResolveCodeTypeFromAnsiString } from './types.js'

const resolveCodeTypeFromAnsiString: ResolveCodeTypeFromAnsiString = function (ansiString) {
  if (ansiString.startsWith('bg')) {
    return 'bg'
  }

  if (ansiString.startsWith('color')) {
    return 'color'
  }

  if (ansiString.startsWith('reset')) {
    return 'reset'
  }

  return 'style'
}

export { resolveCodeTypeFromAnsiString }
