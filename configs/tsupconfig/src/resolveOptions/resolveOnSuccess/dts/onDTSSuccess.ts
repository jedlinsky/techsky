import { dtsEmitter } from './dtsEmitter.js'
import type { DTSEvents, OnDTSSuccess } from './types.js'

const onDTSSuccess: OnDTSSuccess = async function ({ dtsTimeout }) {
  return new Promise<void>((resolve, reject) => {
    const timeout = setTimeout(() => reject('timeoutError'), dtsTimeout)

    const listener: DTSEvents['end'] = function (result) {
      clearTimeout(timeout)

      if (result === 'error') {
        return reject('error')
      }

      return resolve()
    }

    // eslint-disable-next-line functional/no-expression-statements
    dtsEmitter.on('end', listener)
  })
}

export { onDTSSuccess }
