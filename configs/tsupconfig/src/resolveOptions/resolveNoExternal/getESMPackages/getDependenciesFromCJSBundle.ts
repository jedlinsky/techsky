import { getCJSBundleContent } from './getCJSBundleContent.js'
import { getCJSBundleContentDependencies } from './getCJSBundleContentDependencies.js'
import type { GetDependenciesFromCJSBundle } from './types.js'

const getDependenciesFromCJSBundle: GetDependenciesFromCJSBundle = async function ({ cjsBundleEntryPath }) {
  const cjsBundleContent = await getCJSBundleContent({ cjsBundleEntryPath })
  const cjsBundleContentDependencies = getCJSBundleContentDependencies({ cjsBundleContent })

  return cjsBundleContentDependencies
}

export { getDependenciesFromCJSBundle }
