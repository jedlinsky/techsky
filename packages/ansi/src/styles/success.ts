import { ansi } from 'ansi/index.js'
import type { Style } from './types.js'

const success: Style = function (text) {
  return ansi(text, 'colorGreenLight')
}

export { success }
