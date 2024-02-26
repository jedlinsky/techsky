import { mergeOverrides } from './mergeOverrides.js'
import type { MergeConfigs } from './types.js'

const mergeConfigs: MergeConfigs = function ({ editorConfig, filePath, prettierConfig }) {
  const mergedOverrides = mergeOverrides(prettierConfig, filePath)

  return {
    ...editorConfig,
    ...mergedOverrides
  }
}

export { mergeConfigs }
