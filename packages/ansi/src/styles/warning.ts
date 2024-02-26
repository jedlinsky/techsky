import { ansi } from 'ansi/index.js'
import type { Warning } from './types.js'

const warning: Warning = function (text, prependFigure = true) {
  const resolved = ansi(text, { color: 'yellow', style: { bold: true } })

  if (!prependFigure) {
    return resolved
  }

  return `‼ ${resolved}`
}

export { warning }
