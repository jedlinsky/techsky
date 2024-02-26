import { negativeLookaheadPattern } from './negativeLookaheadPattern'
import { optionalPattern } from './optionalPattern'
import { regex } from './regex'
import type { RegexPattern } from './types'

const optionalJS = '(\\.js)?'
const end = `(${optionalJS}$)`

const regexPattern: RegexPattern = {
  any: `^`,
  anyOrEnd: `(.*|${end})`,
  anyOrEndType: `(.*${regex.null}$|${optionalJS}${regex.null}$)`,
  end,
  genericModules: `${optionalPattern('@')}${regex.word}.*`,
  nested: `${regex.forwardSlash}${regex.word}.*`,
  nestedOrEnd: `(${regex.forwardSlash}.*|${end})`,
  nestedOrEndType: `(${regex.forwardSlash}.*${regex.null}$|${optionalJS}${regex.null}$)`,
  notAbsolute: negativeLookaheadPattern(`${optionalPattern(regex.forwardSlash)}${end}`),
  notType: `^${negativeLookaheadPattern(`.*${regex.null}$`)}`,
  optionalJS,
  sideEffects: `^${regex.null}`,
  type: `${regex.null}$`
}

export { regexPattern }
