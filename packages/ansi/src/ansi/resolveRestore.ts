import { code } from './code.js'
import { escapeCode } from './escapeCode.js'
import type { ResolveRestore } from './types.js'

const resolveRestore: ResolveRestore = function ({ bg, color, style }) {
  return [
    ...(bg ? [escapeCode(code.reset.bg)] : []),
    ...(color ? [escapeCode(code.reset.color)] : []),
    ...(style
      ? [
          ...(style.blink ? [escapeCode(code.reset.blink)] : []),
          ...(style.bold ? [escapeCode(code.reset.bold)] : []),
          ...(style.underline ? [escapeCode(code.reset.underline)] : [])
        ]
      : [])
  ].join('')
}

export { resolveRestore }
