import { dtsListener } from './dtsListener.js'
import type { InitDTSListener } from './types.js'

const initDTSListener: InitDTSListener = function () {
  // eslint-disable-next-line functional/no-expression-statements
  process.on('worker', dtsListener)
}

export { initDTSListener }
