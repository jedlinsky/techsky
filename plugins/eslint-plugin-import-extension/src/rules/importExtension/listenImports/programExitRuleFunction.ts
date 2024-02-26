import type { ProgramExitRuleFunction } from './types.js'

const programExitRuleFunction: ProgramExitRuleFunction = function ({ callback, importSet }) {
  return function () {
    callback(Array.from(importSet))
  }
}

export { programExitRuleFunction }
