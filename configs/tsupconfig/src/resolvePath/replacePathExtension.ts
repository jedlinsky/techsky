import type { ReplacePathExtension } from './types.js'

const replacePathExtension: ReplacePathExtension = function ({ extension, path }) {
  return path.replace(/(?!.*[\./]).+/, extension)
}

export { replacePathExtension }
