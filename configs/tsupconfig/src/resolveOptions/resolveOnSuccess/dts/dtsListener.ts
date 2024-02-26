import { handleMessage } from './handleMessage.js'
import type { DTSListener } from './types.js'

const dtsListener: DTSListener = function (worker) {
  // eslint-disable-next-line functional/no-expression-statements
  worker.on('message', handleMessage)
}

export { dtsListener }
