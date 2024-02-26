import { getPackageJson } from './getPackageJson.js'
import type { DistPackageJson, GetDistPackageJson } from './types.js'

const getDistPackageJson: GetDistPackageJson = function ({ outDir }) {
  return getPackageJson([outDir, 'package.json']) as DistPackageJson
}

export { getDistPackageJson }
