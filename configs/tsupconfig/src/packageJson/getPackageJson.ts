import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { GetPackageJson, PackageJson } from './types.js'

const getPackageJson: GetPackageJson = function (path) {
  const packageJsonPath = path ? resolve(...path) : resolve('package.json')

  try {
    const packageJson = readFileSync(packageJsonPath, 'utf8')

    return JSON.parse(packageJson) as PackageJson
  } catch {
    throw new Error(`Cannot read package.json at ${packageJsonPath}`)
  }
}

export { getPackageJson }
