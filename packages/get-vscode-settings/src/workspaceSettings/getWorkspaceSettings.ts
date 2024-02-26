import { readJSON } from 'utils/readJSON.js'
import { getWorkspaceSettingsPath } from './getWorkspaceSettingsPath.js'
import type { GetWorkspaceSettings } from './types.js'

const getWorkspaceSettings: GetWorkspaceSettings = function () {
  const workspaceSettingsPath = getWorkspaceSettingsPath()

  return readJSON(workspaceSettingsPath)
}

export { getWorkspaceSettings }
