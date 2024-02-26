import { getCJSBundleEntryPath } from './getCJSBundleEntryPath.js'
import { getDependenciesFromCJSBundle } from './getDependenciesFromCJSBundle.js'
import { getDependenciesFromRoot } from './getDependenciesFromRoot.js'
import { getPackageJson } from './getPackageJson.js'
import { resolveDependencyPath } from './resolveDependencyPath.js'
import { resolveHasCJS } from './resolveHasCJS.js'
import type { ESMPackages, GetESMPackages } from './types.js'

const getESMPackages: GetESMPackages = async function ({ outDir, outputPath, type }) {
  const cjsBundleEntryPath = type === 'cjsBundle' ? getCJSBundleEntryPath({ outDir, outputPath }) : null

  const dependencies =
    type === 'cjsBundle' ? await getDependenciesFromCJSBundle({ cjsBundleEntryPath }) : await getDependenciesFromRoot()

  if (dependencies === null) {
    return null
  }

  const cwd = process.cwd()

  return dependencies.reduce<Promise<ESMPackages>>(async (accumulator, dependency) => {
    const dependencyPath = resolveDependencyPath({ cjsBundleEntryPath, cwd, dependency, type })
    const packageJson = await getPackageJson({ dependencyPath })
    const hasCJS = resolveHasCJS({ packageJson })

    if (hasCJS) {
      return accumulator
    }

    return [...(await accumulator), dependency]
  }, Promise.resolve([]))
}

export { getESMPackages }
