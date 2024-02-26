import type { ClearWithoutPrevious } from './types.js'

const ANSI_CLEAR_WITHOUT_PREVIOUS = '\x1B[2J\x1B[3J\x1B[H\x1Bc'

const clearWithoutPrevious: ClearWithoutPrevious = function () {
  // eslint-disable-next-line functional/no-expression-statements
  process.stdout.write(ANSI_CLEAR_WITHOUT_PREVIOUS)
}

export { ANSI_CLEAR_WITHOUT_PREVIOUS, clearWithoutPrevious }
