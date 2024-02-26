import { ansi } from 'ansi/index.js'
import type { Style } from './types.js'

const dim: Style = function (text) {
  return ansi(text, 'colorGray')
}

export { dim }
