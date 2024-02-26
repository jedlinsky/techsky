// https://github.com/prettier/prettier/blob/3.0.3/src/config/resolve-editorconfig.js
import editorconfig from 'editorconfig'
import { editorConfigToPrettier } from './editorConfigToPrettier/index.js'
import { resolveRoot } from './resolveRoot/index.js'
import type { LoadEditorConfigUnmemoized } from './types.js'

const loadEditorConfigUnmemoized: LoadEditorConfigUnmemoized = function (filePath) {
  const root = resolveRoot(filePath)

  const editorConfig = editorconfig.parseSync(filePath, {
    root
  })

  return editorConfigToPrettier(editorConfig)
}

export { loadEditorConfigUnmemoized }
