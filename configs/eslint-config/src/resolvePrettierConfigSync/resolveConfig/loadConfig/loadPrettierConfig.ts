// https://github.com/prettier/prettier/blob/3.0.3/src/config/resolve-config.js
import { getExplorer } from 'resolvePrettierConfigSync/getExplorer/index.js'
import type { LoadPrettierConfig } from './types.js'

const loadPrettierConfig: LoadPrettierConfig = function (filePath, { config, useCache }) {
  const { load, search } = getExplorer({
    cache: Boolean(useCache)
  })

  return config ? load(config) : search(filePath)
}

export { loadPrettierConfig }
