import stripAnsi from 'strip-ansi'
import { INDENT_SPACES } from './constants.js'
import type { ResolveSubheader } from './types.js'

const resolveSubheader: ResolveSubheader = function ({ indent, lineLength, text }) {
  if (!text) {
    return
  }

  const subheaderLength = stripAnsi(text).length

  const subheaderIndentSpaces = Math.round((lineLength - subheaderLength) / 2) - INDENT_SPACES / 2

  const subheaderIndent = ' '.repeat(subheaderIndentSpaces)

  const resolvedSubheader = `${subheaderIndent}${text}`

  return `${indent}${resolvedSubheader}`
}

export { resolveSubheader }
