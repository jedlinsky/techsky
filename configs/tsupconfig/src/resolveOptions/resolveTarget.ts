import type { ResolveTarget, Target } from './types.js'

const resolveTarget: ResolveTarget = function ({ isBrowser, tsConfig }) {
  return (tsConfig.compilerOptions?.target as Target | undefined) ?? (isBrowser ? 'es2020' : 'node19')
}

export { resolveTarget }
