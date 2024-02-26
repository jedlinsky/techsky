import { loadEditorConfig } from './loadEditorConfig/index.js'
import { loadPrettierConfig } from './loadPrettierConfig.js'
import type { LoadConfig } from './types.js'

const loadConfig: LoadConfig = function (filePath, options) {
  return {
    editorConfig: loadEditorConfig(filePath, options),
    prettierConfig: loadPrettierConfig(filePath, options)
  }
}

export { loadConfig }
