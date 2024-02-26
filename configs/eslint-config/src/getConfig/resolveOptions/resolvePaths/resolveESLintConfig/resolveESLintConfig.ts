import { resolveConfigPath } from './resolveConfigPath'
import type { ResolveESLintConfig } from './types'

const resolveESLintConfig: ResolveESLintConfig = function ({ eslintConfigPath, resolvePath, workspaces }) {
  const configPath = resolveConfigPath({ eslintConfigPath, workspaces })

  return resolvePath.withRoot(configPath)
}

export { resolveESLintConfig }
