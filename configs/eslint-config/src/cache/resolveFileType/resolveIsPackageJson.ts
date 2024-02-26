import type { ResolveIsPackageJson } from './types'

const resolveIsPackageJson: ResolveIsPackageJson = function ({ fileName }) {
  return fileName === 'package.json'
}

export { resolveIsPackageJson }
