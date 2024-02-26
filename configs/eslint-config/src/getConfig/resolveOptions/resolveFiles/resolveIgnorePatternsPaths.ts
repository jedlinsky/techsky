import type { ResolveIgnorePatternsPaths } from './types'

const resolveIgnorePatternsPaths: ResolveIgnorePatternsPaths = function ({
  extensions,
  gitIgnorePatterns,
  isMonorepoRoot,
  paths
}) {
  const patterns = [
    '!.*',
    ...extensions.all.map((extension) => `!*.config.${extension}`),
    'build/',
    'dist/',
    'node_modules/',
    'out/',
    ...(gitIgnorePatterns ?? []),
    ...(isMonorepoRoot && paths.workspaces ? paths.workspaces.relative.map((path) => `/${path}`) : [])
  ]

  return [...new Set(patterns)]
}

export { resolveIgnorePatternsPaths }
