import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { GetPackageJson, PackageJson } from './types'

const getPackageJson: GetPackageJson = function ({ directoryPath }) {
  const path = resolve(directoryPath, 'package.json')

  try {
    const packageJson = readFileSync(path, 'utf8')

    return JSON.parse(packageJson) as PackageJson
  } catch {
    throw new Error('Unable to resolve package.json.')
  }
}

export { getPackageJson }
