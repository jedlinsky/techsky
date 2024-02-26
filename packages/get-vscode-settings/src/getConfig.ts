import { getUserSettings } from './userSettings/getUserSettings.js'
import { mergeConfigs } from './utils/mergeConfigs.js'
import { getWorkspaceSettings } from './workspaceSettings/getWorkspaceSettings.js'
import type { GetConfig } from 'types.js'
import type { JSONObject } from 'utils/types.js'

const getConfig: GetConfig = function () {
  const userSettings = getUserSettings()
  const workspaceSettings = getWorkspaceSettings()

  const configs = mergeConfigs({ userSettings, workspaceSettings })

  if (Array.isArray(configs)) {
    return null
  }

  if (typeof configs === 'object' && configs !== null) {
    return configs as JSONObject
  }

  return null
}

export { getConfig }
