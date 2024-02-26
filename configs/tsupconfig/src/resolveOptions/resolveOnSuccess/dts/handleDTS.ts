import { logger } from 'logger/index.js'
import { isDTSSuccessFromStore } from './isDTSSuccessFromStore.js'
import { onDTSSuccess } from './onDTSSuccess.js'
import type { HandleDTS, OnDTSSuccessRejectionError } from './types.js'

const handleDTS: HandleDTS = async function ({ dts, dtsTimeout, silent }) {
  if (!dts) {
    return
  }

  const interval = setInterval(
    () =>
      logger({
        silent,
        text: 'Still building...',
        type: 'dts'
      }),
    20000
  )

  try {
    const isSuccessFromStore = isDTSSuccessFromStore()

    if (!isSuccessFromStore) {
      // eslint-disable-next-line functional/no-expression-statements
      await onDTSSuccess({ dtsTimeout })
    }

    clearInterval(interval)
  } catch (_error) {
    clearInterval(interval)

    const error = _error as OnDTSSuccessRejectionError

    if (error === 'error') {
      throw new Error('DTS listener failed for unknown reasons.')
    }

    if (error === 'timeoutError') {
      const message = 'DTS listener timeout.'

      console.error(message)

      throw new Error(message)
    }

    throw error
  }
}

export { handleDTS }
