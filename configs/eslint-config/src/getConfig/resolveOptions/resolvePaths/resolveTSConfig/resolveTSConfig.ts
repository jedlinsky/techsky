import { parseTsconfig as parseTSConfig } from 'get-tsconfig'
import { resolveBaseGeneric } from 'getConfig/resolveOptions/resolvePaths/resolveBase'
import { resolveTSConfigPath } from './resolveTSConfigPath'
import { resolveTSConfigPaths } from './resolveTSConfigPaths'
import type { ParsedTSConfigNonNullable, ResolveTSConfig } from './types'

const resolveTSConfig: ResolveTSConfig = function ({ cwd, root, tsConfigPath }) {
  try {
    const tsConfig = resolveTSConfigPath({ cwd, root, tsConfigPath })

    const parsedTSConfig = parseTSConfig(tsConfig.absolute) as ParsedTSConfigNonNullable

    const { compilerOptions } = parsedTSConfig

    const base = resolveBaseGeneric({ baseUrl: compilerOptions?.baseUrl, cwd, root })

    return {
      __parsedTSConfig: parsedTSConfig,
      base,
      tsConfig,
      tsConfigHasBaseUrl: compilerOptions && 'baseUrl' in compilerOptions ? true : false,
      tsConfigPaths: resolveTSConfigPaths({ base, compilerOptions })
    }
  } catch {
    const base = resolveBaseGeneric({ baseUrl: undefined, cwd, root })

    return {
      __parsedTSConfig: null,
      base,
      tsConfig: null,
      tsConfigHasBaseUrl: false,
      tsConfigPaths: resolveTSConfigPaths({ base, compilerOptions: undefined })
    }
  }
}

export { resolveTSConfig }
