import { error } from '@techsky/ansi'
import { clearKeepPrevious } from 'clear/index.js'
import type { PrintError } from './types.js'

const printError: PrintError = function (errorObject, debug = false) {
  if (!(errorObject instanceof Error)) {
    return console.log(errorObject)
  }

  const { message, name, stack } = errorObject

  clearKeepPrevious(true)

  if (debug) {
    console.log(stack)
  } else {
    console.log(error(name))
    console.log(message)
  }
}

export { printError }
