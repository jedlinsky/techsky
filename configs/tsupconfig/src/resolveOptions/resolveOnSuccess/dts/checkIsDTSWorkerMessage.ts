import type { DTSWorkerMessage } from './types.js'

const checkIsDTSWorkerMessage = function (message: unknown): message is DTSWorkerMessage {
  const isObject = typeof message === 'object' && !Array.isArray(message) && message !== null

  if (!isObject) {
    return false
  }

  if (!('text' in message) || !('type' in message)) {
    return false
  }

  if (typeof message.text !== 'string') {
    return false
  }

  return message.type === 'error' || message.type === 'log'
}

export { checkIsDTSWorkerMessage }
