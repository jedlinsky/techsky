import type { ResolveTSConfigDisplay } from './types'

const resolveTSConfigDisplay: ResolveTSConfigDisplay = function ({ parsedTSConfig }) {
  if (!parsedTSConfig?.display) {
    return false
  }

  return parsedTSConfig.display.toLowerCase() === 'next.js'
}

export { resolveTSConfigDisplay }
