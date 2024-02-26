import { find as detective } from 'detective'
import type { GetCJSBundleContentDependencies } from './types.js'

const getCJSBundleContentDependencies: GetCJSBundleContentDependencies = function ({ cjsBundleContent }) {
  if (cjsBundleContent === null) {
    return null
  }

  const dependencies = detective(cjsBundleContent, {}).strings

  if (dependencies.length === 0) {
    return null
  }

  return dependencies
}

export { getCJSBundleContentDependencies }
