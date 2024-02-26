import type { Regex } from './types'

const regex: Regex = {
  dot: '\\.',
  forwardSlash: '\\/',
  negativeLookahead: '?!',
  null: '\\u0000',
  positiveLookahead: '?=',
  word: '\\w'
}

export { regex }
