import { parse } from 'yaml'
import { readFile } from './readFile'
import type { PnpmWorkspaceFile, PnpmWorkspacePackages, ResolvePnpmWorkspace } from './types'

const resolvePnpmWorkspace: ResolvePnpmWorkspace = function ({ absolutePath }) {
  const file = readFile({ absolutePath })

  if (file === null) {
    return null
  }

  const { packages } = parse(file) as PnpmWorkspaceFile

  return (Array.isArray(packages) ? packages : []) as PnpmWorkspacePackages
}

export { resolvePnpmWorkspace }
