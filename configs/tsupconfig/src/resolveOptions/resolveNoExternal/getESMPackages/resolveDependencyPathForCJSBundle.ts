import { pathToFileURL } from 'node:url'
import { resolve } from 'import-meta-resolve'
import { getPathFromFileURL } from './getPathFromFileURL.js'
import type { ResolveDependencyPathForCJSBundle } from './types.js'

const resolveDependencyPathForCJSBundle: ResolveDependencyPathForCJSBundle = function ({
  cjsBundleEntryPath,
  dependency
}) {
  const cjsBundleEntryFileURLHref = cjsBundleEntryPath ? pathToFileURL(cjsBundleEntryPath).href : null

  const dependencyURL = resolve(dependency, cjsBundleEntryFileURLHref ?? import.meta.url)

  return getPathFromFileURL({ dependencyURL })
}

export { resolveDependencyPathForCJSBundle }
