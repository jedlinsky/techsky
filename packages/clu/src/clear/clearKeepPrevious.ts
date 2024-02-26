import { printDivider } from 'printers/printDivider.js'
import type { ClearKeepPrevious } from './types.js'

const ANSI_CLEAR_KEEP_PREVIOUS = '\x1B[H\x1B[2J'

const clearKeepPrevious: ClearKeepPrevious = function (withDivider = false) {
  if (withDivider) {
    printDivider()
  }

  // eslint-disable-next-line functional/no-expression-statements
  process.stdout.write(ANSI_CLEAR_KEEP_PREVIOUS)
}

export { ANSI_CLEAR_KEEP_PREVIOUS, clearKeepPrevious }
