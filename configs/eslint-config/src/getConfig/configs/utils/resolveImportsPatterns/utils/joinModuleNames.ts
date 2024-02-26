import type { JoinModuleNames } from './types'

const joinModuleNames: JoinModuleNames = function (moduleNames: readonly string[]) {
  return `(${moduleNames.join('|')})`
}

export { joinModuleNames }
