import { resolve } from 'node:path'
import { getDistPackageJson } from 'packageJson/getDistPackageJson.js'
import type { GetCJSBundleEntryPath } from './types.js'

const getCJSBundleEntryPath: GetCJSBundleEntryPath = function ({ outDir, outputPath }) {
  if (outputPath) {
    return resolve(outputPath)
  }

  const distPackageJson = getDistPackageJson({ outDir })

  const entry =
    distPackageJson.main ??
    (distPackageJson.exports?.['.'] && 'require' in distPackageJson.exports['.']
      ? distPackageJson.exports['.'].require
      : null)

  if (entry === null) {
    return null
  }

  return resolve(outDir, entry)
}

export { getCJSBundleEntryPath }
