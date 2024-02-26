import { mergeDependencies } from './mergeDependencies'
import type { ResolveDependencies } from './types'

const resolveDependencies: ResolveDependencies = function ({ packageJson, paths, rootPackageJson }) {
  const rootDependencies = mergeDependencies(rootPackageJson)
  const dependencies = paths.root.relative === './' ? rootDependencies : mergeDependencies(packageJson)

  return {
    dependencies,
    rootDependencies
  }
}

export { resolveDependencies }
