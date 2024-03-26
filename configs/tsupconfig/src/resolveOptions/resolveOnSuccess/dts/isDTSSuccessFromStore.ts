import { dtsMessageStore } from './dtsMessageStore.js'
import { findMessage } from './findMessage.js'
import type { IsDTSSuccessFromStore } from './types.js'

const isDTSSuccessFromStore: IsDTSSuccessFromStore = function () {
  const messages = Array.from(dtsMessageStore)

  const hasError = messages.some(({ type }) => type === 'error')

  if (hasError) {
    // eslint-disable-next-line @typescript-eslint/only-throw-error
    throw 'error'
  }

  const isSuccess = messages.some(({ text, type }) => findMessage({ includes: ['build', 'dts', type], text }) !== null)

  return isSuccess
}

export { isDTSSuccessFromStore }
