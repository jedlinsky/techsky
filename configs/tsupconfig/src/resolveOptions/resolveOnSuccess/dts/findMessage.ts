import stripAnsi from 'strip-ansi'
import type { FindMessage } from './types.js'

const findMessage: FindMessage = function ({ includes, text }) {
  const normalized = stripAnsi(text).trim().toLowerCase()

  const noMatch = includes.some((include) => !normalized.includes(include))

  if (noMatch) {
    return null
  }

  return text
}

export { findMessage }
