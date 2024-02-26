import type { EscapeCode } from './types.js'

const escapeCode: EscapeCode = function (code) {
  return `\x1b[${code}m`
}

export { escapeCode }
