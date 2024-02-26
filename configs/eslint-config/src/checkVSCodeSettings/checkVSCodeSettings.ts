import { getConfig } from '@techsky/get-vscode-settings'
import type { CheckVSCodeSettings } from './types'

const checkVSCodeSettings: CheckVSCodeSettings = function () {
  const config = getConfig()

  if (config === null) {
    return
  }

  if ('eslint.workingDirectories' in config) {
    throw new Error('Please, for now remove property "eslint.workingDirectories" from your vscode settings.')
  }
}

export { checkVSCodeSettings }
