import type { ResolveEntryTypes } from './types.js'

const resolveEntryTypes: ResolveEntryTypes = function ({ deletedDeclarationFiles, value }) {
  if (typeof value === 'string' && deletedDeclarationFiles.includes(value)) {
    return {
      keep: false
    }
  }

  return {
    keep: true
  }
}

export { resolveEntryTypes }
