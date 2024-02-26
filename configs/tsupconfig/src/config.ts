import { defineConfig } from 'tsup'
import { resolveNullEntry } from 'resolveNullEntry/index.js'
import { deleteOutput } from './deleteOutput/index.js'
import { preparePublish } from './plugins/index.js'
import { resolveIncludeCJSBundleBuildOptions, resolveOptions, resolveSilentMessage } from './resolveOptions/index.js'
import { initDTSListener } from './resolveOptions/resolveOnSuccess/dts/initDTSListener.js'
import type { IncludeCJSBundleConfigOptions } from 'resolveOptions/types.js'
import type { Config } from './types.js'

// eslint-disable-next-line max-lines-per-function
const config: Config = function (configOptions) {
  if (configOptions?.entry !== null && configOptions?.dts !== false) {
    initDTSListener()
  }

  // eslint-disable-next-line max-lines-per-function
  return defineConfig(async ({ name, ...defineConfigOptions }) => {
    if (name === 'includeCJSBundle') {
      return await resolveIncludeCJSBundleBuildOptions(defineConfigOptions as IncludeCJSBundleConfigOptions)
    }

    const options = await resolveOptions(configOptions, defineConfigOptions)

    const {
      bundle,
      clean,
      dts,
      entry,
      esbuildOptions,
      external,
      extraEntry,
      format,
      includeCJSBundle,
      includeCJSBundleEntry,
      includeCJSBundleOptions,
      includeDistPackageJson,
      keepNames,
      minify,
      noExternal,
      onSuccess,
      outDir,
      outExtension,
      platform,
      plugins,
      silent,
      splitting,
      target,
      treeshake,
      watch
    } = options

    // eslint-disable-next-line functional/no-expression-statements
    resolveSilentMessage({ name, silent })

    // eslint-disable-next-line functional/no-expression-statements
    await deleteOutput({ outDir, silent })

    if (includeCJSBundleEntry === null || entry === null) {
      // eslint-disable-next-line functional/no-expression-statements
      await resolveNullEntry({ ...options, entry: null })

      // eslint-disable-next-line functional/no-expression-statements
      process.exit()
    }

    return [
      ...(includeCJSBundleOptions ? [includeCJSBundleOptions] : []),
      ...(extraEntry?.cjs ?? []),
      ...(extraEntry?.esm ?? []),
      {
        bundle,
        clean,
        dts,
        entry,
        esbuildOptions,
        ...(includeDistPackageJson || includeCJSBundle
          ? {
              esbuildPlugins: [preparePublish(options)]
            }
          : {}),
        ...(external ? { external } : {}),
        format,
        minify,
        ...(noExternal ? { noExternal } : {}),
        keepNames,
        ...(onSuccess ? { onSuccess } : {}),
        outDir,
        outExtension,
        platform,
        plugins,
        silent: silent ? true : false,
        splitting,
        target,
        treeshake,
        watch
      }
    ]
  })
}

export { config }
