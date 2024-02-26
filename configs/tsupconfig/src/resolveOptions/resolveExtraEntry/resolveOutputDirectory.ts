import type { ResolveOutputDirectory } from './types.js'

const resolveOutputDirectory: ResolveOutputDirectory = function ({ resolvedOutputPath }) {
  return resolvedOutputPath.split('/').slice(0, -1).join('/')
}

export { resolveOutputDirectory }
