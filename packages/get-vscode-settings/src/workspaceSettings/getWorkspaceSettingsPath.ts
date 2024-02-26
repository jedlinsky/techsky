import { resolve } from 'node:path'
import { findRootSync } from '@manypkg/find-root'
import type { GetWorkspaceSettingsPath } from './types.js'

const getWorkspaceSettingsPath: GetWorkspaceSettingsPath = function () {
  const { rootDir } = findRootSync(process.cwd())

  return resolve(rootDir, '.vscode', 'settings.json')
}

export { getWorkspaceSettingsPath }
