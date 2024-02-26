import type { MergeDependencies } from './types'

const mergeDependencies: MergeDependencies = function (packageJson) {
  const dependencies = packageJson.dependencies ?? {}
  const devDependencies = packageJson.devDependencies ?? {}
  const peerDependencies = packageJson.peerDependencies ?? {}

  return { ...dependencies, ...devDependencies, ...peerDependencies }
}

export { mergeDependencies }
