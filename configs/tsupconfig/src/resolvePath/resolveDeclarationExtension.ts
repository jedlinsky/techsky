import { replacePathExtension } from './replacePathExtension.js'
import type { ResolveDeclarationExtension } from './types.js'

const resolveDeclarationExtension: ResolveDeclarationExtension = function (path) {
  return replacePathExtension({ extension: 'd.ts', path })
}

export { resolveDeclarationExtension }
