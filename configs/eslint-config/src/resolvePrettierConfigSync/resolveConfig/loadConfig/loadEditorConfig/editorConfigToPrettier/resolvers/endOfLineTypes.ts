import type { EndOfLineTypes } from './types.js'

const endOfLineTypes = ['cr', 'crlf', 'lf'] as const satisfies EndOfLineTypes

export { endOfLineTypes }
