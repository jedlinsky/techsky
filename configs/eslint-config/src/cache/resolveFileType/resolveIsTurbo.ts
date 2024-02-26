import type { ResolveIsTurbo } from './types'

const resolveIsTurbo: ResolveIsTurbo = function ({ fileName }) {
  return fileName === 'turbo.json'
}

export { resolveIsTurbo }
