import type { ResolveFormat } from './types.js'

const resolveFormat: ResolveFormat = function ({ packageJson, tsConfig }) {
  const compilerOptionsModule = tsConfig.compilerOptions?.module

  if (!compilerOptionsModule) {
    return packageJson.type === 'module' ? 'esm' : 'cjs'
  }

  return compilerOptionsModule.toLowerCase() === 'commonjs' ? 'cjs' : 'esm'
}

export { resolveFormat }
