import { checkIsDTSWorkerMessage } from './checkIsDTSWorkerMessage.js'
import { dtsEmitter } from './dtsEmitter.js'
import { dtsMessageStore } from './dtsMessageStore.js'
import { findMessage } from './findMessage.js'
import type { HandleMessage } from './types.js'

const handleMessage: HandleMessage = function (message) {
  if (!checkIsDTSWorkerMessage(message)) {
    return
  }

  const { text, type: defaultType } = message

  const type = defaultType === 'log' ? 'success' : 'error'

  if (findMessage({ includes: ['dts'], text })) {
    // eslint-disable-next-line functional/no-expression-statements
    dtsMessageStore.add({ text, type })
  }

  if (!findMessage({ includes: ['build', 'dts', type], text })) {
    return
  }

  // eslint-disable-next-line functional/no-expression-statements
  setTimeout(() => {
    // eslint-disable-next-line functional/no-expression-statements
    dtsEmitter.emit('end', type)
  }, 40)
}

export { handleMessage }
