import type { ResolvePackageJson } from './types.js'

const resolvePackageJson: ResolvePackageJson = function ({ format, packageJson }) {
  if (!packageJson.main && !packageJson.module) {
    return
  }

  return packageJson[format === 'cjs' ? 'main' : 'module'] ?? packageJson[format === 'cjs' ? 'module' : 'main']
}

export { resolvePackageJson }
