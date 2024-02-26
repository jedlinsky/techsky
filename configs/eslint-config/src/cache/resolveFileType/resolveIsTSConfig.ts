import type { ResolveIsTSConfig } from './types'

const resolveIsTSConfig: ResolveIsTSConfig = function ({ fileName }) {
  return fileName === 'tsconfig.json'
}

export { resolveIsTSConfig }
