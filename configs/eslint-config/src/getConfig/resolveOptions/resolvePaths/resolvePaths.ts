import { getResolvePath } from './getPathResolver'
import { resolveBase } from './resolveBase'
import { resolveEnv } from './resolveEnv'
import { resolveESLintConfig } from './resolveESLintConfig'
import { resolveGitIgnore, resolveGitIgnoreWorkspace } from './resolveGitIgnore'
import { resolveNextJSApp } from './resolveNextJSApp'
import { resolveNextJSPages } from './resolveNextJSPages'
import { resolvePnpmWorkspaceConfig } from './resolvePnpmWorkspaceConfig'
import { resolvePrettierConfig } from './resolvePrettierConfig'
import { resolveRoot } from './resolveRoot'
import { resolveTSConfig } from './resolveTSConfig'
import { resolveTurboConfig } from './resolveTurboConfig'
import { resolveWorkspaces } from './resolveWorkspaces'
import type { ResolvePaths } from './types'

const resolvePaths: ResolvePaths = function ({
  baseUrl,
  cwd,
  envPath,
  eslintConfigPath,
  nextJSAppDir,
  nextJSPagesDir,
  rootPackageJson,
  tsConfigPath
}) {
  const pnpmWorkspaceConfig = resolvePnpmWorkspaceConfig({ cwd })
  const workspaces = resolveWorkspaces({ cwd, pnpmWorkspaceConfig, rootPackageJson })
  const root = resolveRoot({ cwd, eslintConfigPath, workspaces })

  const {
    __parsedTSConfig,
    base: tsConfigBase,
    tsConfig,
    tsConfigHasBaseUrl,
    tsConfigPaths
  } = resolveTSConfig({ cwd, root, tsConfigPath })

  const base = resolveBase({ baseUrl, cwd, root, tsConfigBase, tsConfigHasBaseUrl })

  const resolvePath = getResolvePath({ baseRelative: base.relative, cwd, rootRelative: root.relative })

  const env = resolveEnv({ envPath, resolvePath })
  const eslintConfig = resolveESLintConfig({ eslintConfigPath, resolvePath, workspaces })
  const gitIgnore = resolveGitIgnore()
  const gitIgnoreWorkspace = resolveGitIgnoreWorkspace({ resolvePath })
  const nextJSApp = resolveNextJSApp({ nextJSAppDir, resolvePath })
  const nextJSPages = resolveNextJSPages({ nextJSPagesDir, resolvePath })
  const prettierConfig = resolvePrettierConfig({ cwd, resolvePath, root })
  const turboConfig = resolveTurboConfig()

  return {
    __parsedTSConfig,
    base,
    cwd,
    env,
    eslintConfig,
    gitIgnore,
    gitIgnoreWorkspace,
    nextJSApp,
    nextJSPages,
    pnpmWorkspaceConfig,
    prettierConfig,
    root,
    tsConfig,
    tsConfigPaths,
    turboConfig,
    workspaces
  }
}

export { resolvePaths }
