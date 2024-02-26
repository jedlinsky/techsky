import { ansi } from 'ansi/index.js'
import type { Style } from './types.js'

const error: Style = function (text) {
  return ansi(text, { color: 'redLight', style: { bold: true } })
}

export { error }
