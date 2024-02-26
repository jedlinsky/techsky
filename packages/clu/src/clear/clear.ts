import { clearKeepPrevious } from './clearKeepPrevious.js'
import { clearWithoutPrevious } from './clearWithoutPrevious.js'
import type { Clear } from './types.js'

const clear: Clear = function (clearConsole) {
  if (!clearConsole) {
    return
  }

  if (clearConsole === 'keepPrevious') {
    return clearKeepPrevious(true)
  }

  return clearWithoutPrevious()
}

export { clear }
