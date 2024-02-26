import type { ResolveNoExternalDefaults } from './types.js'

const resolveNoExternalDefaults: ResolveNoExternalDefaults = function ({ noExternalDefaults = true }) {
  return noExternalDefaults
}

export { resolveNoExternalDefaults }
