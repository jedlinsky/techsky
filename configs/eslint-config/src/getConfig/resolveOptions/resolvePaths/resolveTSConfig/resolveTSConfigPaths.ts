import type { ResolveTSConfigPaths } from './types'

const resolveTSConfigPaths: ResolveTSConfigPaths = function ({ base, compilerOptions }) {
  const pathsKeys = compilerOptions?.paths ? Object.keys(compilerOptions.paths) : []

  const merged = [...base.entries, ...pathsKeys]

  return [...new Set(merged)].sort((pathA, pathB) => pathA.localeCompare(pathB))
}

export { resolveTSConfigPaths }
