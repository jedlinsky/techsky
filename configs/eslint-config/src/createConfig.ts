import { getCachedConfig } from './cache'
import { checkVSCodeSettings } from './checkVSCodeSettings'
import { getConfig } from './getConfig'
import { getESLintConfigPath } from './getESLintConfigPath'
import { getIsExtension } from './getIsExtension'
import type { CreateConfig } from './types'

const createConfig: CreateConfig = function (userOptions = {}) {
  const eslintConfigPath = getESLintConfigPath()

  const isExtension = getIsExtension()

  if (isExtension) {
    checkVSCodeSettings()

    return getCachedConfig({ eslintConfigPath, userOptions })
  }

  return getConfig({ eslintConfigPath, userOptions })
}

export { createConfig }
