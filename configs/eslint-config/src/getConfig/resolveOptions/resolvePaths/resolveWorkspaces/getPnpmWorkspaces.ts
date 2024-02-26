import { readFileSync } from 'node:fs'
import { parse } from 'yaml'
import type { GetPnpmWorkspaces, PnpmWorkspacesFile } from './types'

const getPnpmWorkspaces: GetPnpmWorkspaces = function ({ pnpmWorkspaceConfig }) {
  try {
    const pnpmWorkspaceConfigFile = readFileSync(pnpmWorkspaceConfig.absolute, 'utf8')

    const parsed = parse(pnpmWorkspaceConfigFile) as PnpmWorkspacesFile

    if (!parsed.packages) {
      return null
    }

    if (parsed.packages.length === 0) {
      return null
    }

    return parsed.packages
  } catch {
    return null
  }
}

export { getPnpmWorkspaces }
