import type { ResolveIsPnpmWorkspace } from './types'

const resolveIsPnpmWorkspace: ResolveIsPnpmWorkspace = function ({ fileName }) {
  return fileName === 'pnpm-workspace.yaml'
}

export { resolveIsPnpmWorkspace }
