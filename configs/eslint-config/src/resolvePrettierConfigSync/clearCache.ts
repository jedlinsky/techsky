// https://github.com/prettier/prettier/blob/3.0.3/src/config/resolve-config.js
import { memClear } from 'mem'
import { getExplorer } from './getExplorer/index.js'
import { loadEditorConfigMemoized } from './resolveConfig/index.js'
import type { ClearCache } from './types.js'

const clearCache: ClearCache = function () {
  memClear(getExplorer)
  memClear(loadEditorConfigMemoized)
}

export { clearCache }
