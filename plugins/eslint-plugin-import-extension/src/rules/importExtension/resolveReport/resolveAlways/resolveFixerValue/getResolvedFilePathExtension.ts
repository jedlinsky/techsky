import type { ExtensionMap, GetResolvedFilePathExtension } from './types.js'

const extensionMap: ExtensionMap = {
  '': '.js',
  '.cts': '.cjs',
  '.d.ts': '.js',
  '.mts': '.mjs',
  '.ts': '.js',
  '.tsx': '.js'
}

const getResolvedFilePathExtension: GetResolvedFilePathExtension = function ({ filePathExtension, mapTSToJS }) {
  if (!mapTSToJS) {
    return filePathExtension ?? '.ts'
  }

  return extensionMap[filePathExtension ?? ''] ?? filePathExtension ?? '.js'
}

export { getResolvedFilePathExtension }
