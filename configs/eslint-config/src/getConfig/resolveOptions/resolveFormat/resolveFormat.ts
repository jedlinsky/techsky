import type { ResolveFormat } from './types'

const resolveFormat: ResolveFormat = function ({ packageJson, parsedTSConfig }) {
  const compilerOptionsModule = parsedTSConfig?.compilerOptions?.module

  if (!compilerOptionsModule) {
    return packageJson.type === 'module' ? 'esm' : 'cjs'
  }

  return compilerOptionsModule.toLowerCase() === 'commonjs' ? 'cjs' : 'esm'
}

export { resolveFormat }
