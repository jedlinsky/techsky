import { ansi } from 'ansi/index.js'
import type { Style } from './types.js'

const underline: Style = function (text) {
  return ansi(text, 'styleUnderline')
}

export { underline }
