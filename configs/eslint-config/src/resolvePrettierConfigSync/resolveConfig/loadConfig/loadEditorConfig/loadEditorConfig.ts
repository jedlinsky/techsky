// https://github.com/prettier/prettier/blob/3.0.3/src/config/resolve-config.js
import { loadEditorConfigMemoized } from './loadEditorConfigMemoized.js'
import { loadEditorConfigUnmemoized } from './loadEditorConfigUnmemoized.js'
import type { LoadEditorConfig } from './types.js'

const loadEditorConfig: LoadEditorConfig = function (filePath, options) {
  if (!filePath || !options.editorconfig) {
    return null
  }

  if (options.useCache) {
    return loadEditorConfigMemoized(filePath)
  }

  return loadEditorConfigUnmemoized(filePath)
}

export { loadEditorConfig }
