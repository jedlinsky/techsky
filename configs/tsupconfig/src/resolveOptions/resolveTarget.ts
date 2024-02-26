import type { ResolveTarget } from './types.js'

const resolveTarget: ResolveTarget = function ({ isBrowser, tsConfig }) {
  return tsConfig.compilerOptions?.target ?? isBrowser ? 'es2020' : 'node19'
}

export { resolveTarget }
