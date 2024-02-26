import { format } from 'date-fns'
import type { ResolveSilentMessage } from './types.js'

const resolveSilentMessage: ResolveSilentMessage = function ({ name, silent }) {
  if (name !== undefined) {
    return
  }

  if (silent !== 'minimal') {
    return
  }

  const time = format(new Date(), 'HH:mm:ss.SSS')

  console.log(`[${time}]`, 'building...')
}

export { resolveSilentMessage }
