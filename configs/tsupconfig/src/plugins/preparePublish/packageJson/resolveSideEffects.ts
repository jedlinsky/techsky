import type { ResolveSideEffects } from './types.js'

const resolveSideEffects: ResolveSideEffects = function ({ format, packageJson }) {
  if (packageJson.sideEffects) {
    return packageJson.sideEffects
  }

  if (format === 'cjs') {
    return false
  }
}

export { resolveSideEffects }
