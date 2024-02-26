import type { GetIsExtension } from './types'

const getIsExtension: GetIsExtension = function () {
  // eslint-disable-next-line n/no-process-env
  return 'VSCODE_PID' in process.env
}

export { getIsExtension }
