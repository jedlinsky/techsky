import { merge } from 'merge-anything'
import type { MergeConfigs } from './types.js'

const mergeConfigs: MergeConfigs = function ({ userSettings, workspaceSettings }) {
  return merge(userSettings, workspaceSettings)
}

export { mergeConfigs }
