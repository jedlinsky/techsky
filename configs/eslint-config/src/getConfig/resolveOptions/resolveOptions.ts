import { resolveDependencies } from './resolveDependencies'
import { resolveExtensions } from './resolveExtensions'
import { resolveFiles } from './resolveFiles'
import { resolveFormat } from './resolveFormat'
import { resolveGitIgnorePatterns } from './resolveGitIgnorePatterns'
import { resolveHas } from './resolveHas'
import { resolveIsMonorepo } from './resolveIsMonorepo'
import { resolveIsProjectRoot } from './resolveIsProjectRoot'
import { resolveIsTurborepo } from './resolveIsTurborepo'
import { resolvePackageJson, resolveRootPackageJson } from './resolvePackageJson'
import { resolvePaths } from './resolvePaths'
import { resolvePrettier } from './resolvePrettier'
import { resolveScope } from './resolveScope'
import { resolveUserOptions } from './resolveUserOptions'
import type { ResolveOptions } from './types'

const resolveOptions: ResolveOptions = function ({ cwd = process.cwd(), eslintConfigPath, userOptions }) {
  const resolvedUserOptions = resolveUserOptions(userOptions)

  const rootPackageJson = resolveRootPackageJson({ cwd })

  const {
    baseUrl,
    envPath,
    mergePrettier,
    nextJSAppDir,
    nextJSPagesDir,
    npmScope,
    tsConfigPath,
    ...resolvedUserOptionsWithoutSome
  } = resolvedUserOptions

  const { __parsedTSConfig: parsedTSConfig, ...paths } = resolvePaths({
    baseUrl,
    cwd,
    envPath,
    eslintConfigPath,
    nextJSAppDir,
    nextJSPagesDir,
    rootPackageJson,
    tsConfigPath
  })

  const packageJson = resolvePackageJson({ paths, rootPackageJson })

  const { dependencies, rootDependencies } = resolveDependencies({ packageJson, paths, rootPackageJson })

  const format = resolveFormat({ packageJson, parsedTSConfig })

  const has = resolveHas({ dependencies, packageJson, parsedTSConfig, paths, userOptions })

  const extensions = resolveExtensions(has)

  const gitIgnorePatterns = resolveGitIgnorePatterns({
    ignoreGitIgnored: resolvedUserOptions.ignoreGitIgnored,
    paths
  })

  const { isMonorepo, isMonorepoRoot } = resolveIsMonorepo({ paths })

  const files = resolveFiles({
    extensions,
    gitIgnorePatterns,
    has,
    isMonorepoRoot,
    paths,
    rules: resolvedUserOptions.rules
  })

  const isTurborepo = resolveIsTurborepo({ isMonorepo, paths, rootDependencies })

  const prettier = resolvePrettier({
    mergePrettier,
    paths,
    prettier: resolvedUserOptions.prettier
  })

  const isProjectRoot = resolveIsProjectRoot({ paths })

  const scope = resolveScope({ npmScope, packageJson })

  return {
    ...resolvedUserOptionsWithoutSome,
    dependencies,
    extensions,
    files,
    format,
    gitIgnorePatterns,
    has,
    isMonorepo,
    isMonorepoRoot,
    isProjectRoot,
    isTurborepo,
    packageJson,
    parsedTSConfig,
    paths,
    prettier,
    resolvedUserOptions,
    rootDependencies,
    rootPackageJson,
    scope,
    userOptions
  }
}

export { resolveOptions }
