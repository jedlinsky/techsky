// https://github.com/prettier/prettier/blob/3.0.3/src/config/load-external-config.js
import { ignoredErrorCodes } from './ignoredErrorCodes.js'
import { requireFromFile } from './requireFromFile.js'
import type { LoadExternalConfig } from './types.js'

const loadExternalConfig: LoadExternalConfig = function (config, filePath) {
  try {
    return requireFromFile(config, filePath)
  } catch (error) {
    if (error === null) {
      return null
    }

    if (typeof error !== 'object') {
      return null
    }

    if (!('code' in error)) {
      return null
    }

    if (typeof error.code !== 'string') {
      return null
    }

    if (ignoredErrorCodes.includes(error.code)) {
      return null
    }

    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw error
  }
}

export { loadExternalConfig }
