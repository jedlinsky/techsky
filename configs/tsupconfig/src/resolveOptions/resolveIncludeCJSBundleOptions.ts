import { build } from 'tsup'
import { removeDistPackageJson } from 'packageJson/removeDistPackageJson.js'
import { resolveCommonCJSBundleOptions } from './resolveCommonCJSBundleOptions.js'
import type { ResolveIncludeCJSBundleOptions } from './types.js'

const resolveIncludeCJSBundleOptions: ResolveIncludeCJSBundleOptions = function ({
  esbuildOptions,
  external,
  format,
  includeCJSBundle,
  includeCJSBundleEntry,
  includeDistPackageJson,
  keepNames,
  noExternal,
  noExternalDefaults,
  outDir,
  platform,
  plugins,
  silent,
  target,
  treeshake
}) {
  if (!includeCJSBundle) {
    return null
  }

  if (includeCJSBundleEntry === null) {
    return null
  }

  const options = resolveCommonCJSBundleOptions({
    entry: includeCJSBundleEntry,
    esbuildOptions,
    external,
    format,
    keepNames,
    noExternal,
    noExternalDefaults,
    outDir,
    platform,
    plugins,
    target,
    treeshake
  })

  if (options === null) {
    return null
  }

  return {
    ...options,
    onSuccess: async () => {
      // eslint-disable-next-line functional/no-expression-statements
      await build({
        ...options,
        name: 'includeCJSBundle',
        onSuccess: async () => {
          if (includeDistPackageJson) {
            return
          }

          // eslint-disable-next-line functional/no-expression-statements
          await removeDistPackageJson({ outDir, silent })
        },
        silent: silent ? true : false
      })
    }
  }
}

export { resolveIncludeCJSBundleOptions }
