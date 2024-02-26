import type { ResolveMessage } from './types.js'

const resolveMessage: ResolveMessage = function ({ remove }) {
  return `'${remove}'`
}

export { resolveMessage }
