import { resolveCopy } from './resolveCopy/index.js'
import { resolveEntry } from './resolveEntry/index.js'
import { resolveExtraEntry } from './resolveExtraEntry/index.js'
import { resolveMainEntry } from './resolveMainEntry/index.js'
import { resolveNoExternal } from './resolveNoExternal/index.js'
import { resolveOnSuccess } from './resolveOnSuccess/index.js'
import { resolvePackageJson } from './resolvePackageJson/index.js'
import { resolveAugmentation } from './resolveAugmentation.js'
import { resolveBundle } from './resolveBundle.js'
import { resolveClean } from './resolveClean.js'
import { resolveDeleteEmptyEmittedFiles } from './resolveDeleteEmptyEmittedFiles.js'
import { resolveESBuildOptions } from './resolveESBuildOptions.js'
import { resolveExcludeEntry } from './resolveExcludeEntry.js'
import { resolveExcludeEntryDTS } from './resolveExcludeEntryDTS.js'
import { resolveExecuteOnWatch } from './resolveExecuteOnWatch.js'
import { resolveFormat } from './resolveFormat.js'
import { resolveIncludeCJSBundle } from './resolveIncludeCJSBundle.js'
import { resolveIncludeCJSBundleEntry } from './resolveIncludeCJSBundleEntry.js'
import { resolveIncludeCJSBundleOptions } from './resolveIncludeCJSBundleOptions.js'
import { resolveIsBrowser } from './resolveIsBrowser.js'
import { resolveKeepNames } from './resolveKeepNames.js'
import { resolveLogLevel } from './resolveLogLevel.js'
import { resolveMinify } from './resolveMinify.js'
import { resolveNoExternalDefaults } from './resolveNoExternalDefaults.js'
import { resolveOutExtension } from './resolveOutExtension.js'
import { resolvePlatform } from './resolvePlatform.js'
import { resolvePlugins } from './resolvePlugins.js'
import { resolveSilent } from './resolveSilent.js'
import { resolveSplitting } from './resolveSplitting.js'
import { resolveTarget } from './resolveTarget.js'
import { resolveTSConfig } from './resolveTSConfig.js'
import { resolveWatch } from './resolveWatch.js'
import type { ResolveOptions } from './types.js'

const outDir = 'dist'
const srcDir = 'src'
const treeshake = true

// eslint-disable-next-line max-lines-per-function
const resolveOptions: ResolveOptions = async function (options = {}, defineConfigOptions) {
  const packageJson = resolvePackageJson()
  const tsConfig = resolveTSConfig()

  const { dts = { resolve: true }, dtsTimeout = 60000, external, includeDistPackageJson = true } = options

  const userEntry = options.entry

  const format = resolveFormat({ packageJson, tsConfig })
  const watch = resolveWatch({ userEntry, watch: defineConfigOptions.watch })
  const silent = resolveSilent({ dts, silent: options.silent, watch })
  const logLevel = resolveLogLevel({ logLevel: options.logLevel })

  const esbuildOptions = resolveESBuildOptions({ logLevel })

  const bundle = resolveBundle({ bundle: options.bundle, format })
  const includeCJSBundle = resolveIncludeCJSBundle({ format, includeCJSBundle: options.includeCJSBundle })
  const clean = resolveClean({ watch })
  const copy = resolveCopy({ copy: options.copy, outDir })

  const deleteEmptyEmittedFiles = resolveDeleteEmptyEmittedFiles({
    deleteEmptyEmittedFiles: options.deleteEmptyEmittedFiles
  })

  const executeOnWatch = resolveExecuteOnWatch({ executeOnWatch: options.executeOnWatch })
  const isBrowser = resolveIsBrowser({ tsConfig })
  const keepNames = resolveKeepNames({ minify: options.minify })
  const minify = resolveMinify({ format, isBrowser, minify: options.minify })

  const mainEntry = resolveMainEntry({ bundle, format, packageJson, srcDir, tsConfig, userEntry })

  const mainEntryNotOutput = resolveMainEntry({
    bundle,
    format,
    forOutput: false,
    packageJson,
    srcDir,
    tsConfig,
    userEntry
  })

  const includeCJSBundleEntry = resolveIncludeCJSBundleEntry({ entry: userEntry, mainEntryNotOutput, srcDir })

  const excludeEntry = resolveExcludeEntry({ excludeEntry: options.excludeEntry, srcDir })
  const excludeEntryDTS = resolveExcludeEntryDTS({ excludeEntryDTS: options.excludeEntryDTS })

  const augmentation = resolveAugmentation({ augmentation: options.augmentation, outDir, srcDir })

  const entry = resolveEntry({
    augmentation,
    bundle,
    entry: userEntry,
    excludeEntry,
    excludeEntryDTS,
    extraEntry: options.extraEntry,
    mainEntryNotOutput,
    srcDir
  })

  const onSuccess =
    mainEntry === null
      ? options.onSuccess
      : resolveOnSuccess({
          augmentation,
          bundle,
          copy,
          deleteEmptyEmittedFiles,
          dts,
          dtsTimeout,
          executeOnWatch,
          includeDistPackageJson,
          mainEntry,
          onSuccess: options.onSuccess,
          outDir,
          silent,
          watch
        })

  const outExtension = resolveOutExtension()
  const platform = resolvePlatform({ isBrowser })
  const splitting = resolveSplitting({ isBrowser })
  const target = resolveTarget({ isBrowser, tsConfig })

  const noExternalDefaults = resolveNoExternalDefaults({ noExternalDefaults: options.noExternalDefaults })
  const noExternal = await resolveNoExternal({ format, noExternal: options.noExternal, noExternalDefaults, outDir })

  const plugins = resolvePlugins()

  const includeCJSBundleOptions = resolveIncludeCJSBundleOptions({
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
  })

  const extraEntry = resolveExtraEntry({
    dts,
    esbuildOptions,
    external,
    extraEntry: options.extraEntry,
    format,
    keepNames,
    minify,
    noExternal,
    noExternalDefaults,
    outDir,
    platform,
    plugins,
    srcDir,
    target,
    treeshake
  })

  return {
    augmentation,
    bundle,
    clean,
    copy,
    deleteEmptyEmittedFiles,
    dts,
    dtsTimeout,
    entry,
    esbuildOptions,
    excludeEntry,
    excludeEntryDTS,
    executeOnWatch,
    external,
    extraEntry,
    format,
    includeCJSBundle,
    includeCJSBundleEntry,
    includeCJSBundleOptions,
    includeDistPackageJson,
    isBrowser,
    keepNames,
    logLevel,
    mainEntry,
    mainEntryNotOutput,
    minify,
    noExternal,
    onSuccess,
    outDir,
    outExtension,
    packageJson,
    platform,
    plugins,
    silent,
    splitting,
    srcDir,
    target,
    treeshake,
    tsConfig,
    userEntry,
    watch
  }
}

export { resolveOptions }
