import { ansi } from 'ansi/index.js'
import type { Style } from './types.js'

const link: Style = function (text) {
  return ansi(text, { color: 'cyan', style: { underline: true } })
}

export { link }
