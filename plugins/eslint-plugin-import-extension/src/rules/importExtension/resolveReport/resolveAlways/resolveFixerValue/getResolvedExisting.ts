import { getResolvedFilePathExtension } from './getResolvedFilePathExtension.js'
import type { GetResolvedExisting } from './types.js'

const getResolvedExisting: GetResolvedExisting = function ({ existing, mapTSToJS }) {
  return existing.map((filePathExtension) => getResolvedFilePathExtension({ filePathExtension, mapTSToJS }))
}

export { getResolvedExisting }
