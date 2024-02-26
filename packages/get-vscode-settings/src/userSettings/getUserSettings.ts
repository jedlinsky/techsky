import { readJSON } from 'utils/readJSON.js'
import { getUserSettingsPath } from './getUserSettingsPath.js'
import type { GetUserSettings } from './types.js'

const getUserSettings: GetUserSettings = function () {
  const userSettingsPath = getUserSettingsPath()

  return readJSON(userSettingsPath)
}

export { getUserSettings }
