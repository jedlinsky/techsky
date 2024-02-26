import { clearKeepPrevious } from 'clear/index.js'
import dropRight from 'lodash/fp/dropRight.js'
import isNumber from 'lodash/fp/isNumber.js'
import nth from 'lodash/fp/nth.js'
import { inspect } from './inspect.js'
import type { Log } from './types.js'

// eslint-disable-next-line functional/functional-parameters
const log: Log = function (...args) {
  if (!args.length) {
    return
  }

  switch (args.length) {
    case 0: {
      return
    }

    case 1: {
      clearKeepPrevious(true)

      return console.log(inspect(args[0]))
    }

    default: {
      clearKeepPrevious(true)

      const last = nth(-1, args)
      const secondLast = nth(-2, args)

      const lastIsNumber = isNumber(last)

      const toInspect = lastIsNumber ? secondLast : last
      const depth = lastIsNumber ? last : null

      const plain = dropRight(lastIsNumber ? 2 : 1, args)

      return console.log(...plain, inspect(toInspect, depth))
    }
  }
}

export { log }
