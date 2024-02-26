import { ansi } from 'ansi/index.js'
import type { Style } from './types.js'

const white: Style = function (text) {
  return ansi(text, 'colorWhite')
}

export { white }
