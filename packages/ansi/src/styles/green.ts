import { ansi } from 'ansi/index.js'
import type { Style } from './types.js'

const green: Style = function (text) {
  return ansi(text, 'colorGreen')
}

export { green }
