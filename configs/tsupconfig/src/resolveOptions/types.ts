import type { BuildOptions as DefaultESBuildOptions } from 'esbuild'
import type { TsConfigJsonResolved as TSConfigJsonResolved } from 'get-tsconfig'
import type { DeepReadonly } from 'ts-essentials'
import type { ConfigOptions, DefineConfigOptions, DTSTimeout, LogLevel, Silent, Treeshake, TSUpOptions } from 'types.js'
import type { Plugins } from './plugins/index.js'
import type { Copy } from './resolveCopy/types.js'
import type { Entry, ResolveEntryProps } from './resolveEntry/types.js'
import type { ExtraEntry } from './resolveExtraEntry/types.js'
import type { MainEntry } from './resolveMainEntry/types.js'
import type { PackageJson } from './resolvePackageJson/types.js'

type _Augmentation = {
  readonly entry: string
  readonly name: string
  readonly outDir: OutDir
  readonly outputPath: string
}

type Augmentation = readonly _Augmentation[] | null

type ResolveAugmentationProps = {
  readonly augmentation: ConfigOptions['augmentation']
  readonly outDir: OutDir
  readonly srcDir: Options['srcDir']
}

type ResolveAugmentation = (props: ResolveAugmentationProps) => Augmentation

type Bundle = boolean

type ResolveBundleProps = {
  readonly bundle: TSUpOptions['bundle'] | undefined
  readonly format: Format
}

type ResolveBundle = (props: ResolveBundleProps) => Bundle

type IncludeCJSBundle = boolean

type ResolveIncludeCJSBundleProps = {
  readonly format: Format
  readonly includeCJSBundle?: ConfigOptions['includeCJSBundle'] | undefined
}

type ResolveIncludeCJSBundle = (props: ResolveIncludeCJSBundleProps) => IncludeCJSBundle

type CommonCJSBundleOptionsExtra = {
  readonly noExternal: TSUpOptions['noExternal'] | undefined
  readonly noExternalDefaults: NoExternalDefaults
  readonly outDir: OutDir
  readonly outputPath?: string | undefined
}

type Shims = boolean

type CommonCJSBundleOptions = {
  readonly bundle: Bundle
  readonly entry: Exclude<Entry, null>
  readonly esbuildOptions: ESBuildOptions
  readonly external?: TSUpOptions['external']
  readonly extra: CommonCJSBundleOptionsExtra
  readonly format: Format
  readonly keepNames: KeepNames
  readonly minify: Minify
  readonly noExternal?: TSUpOptions['noExternal']
  readonly outDir: OutDir
  readonly outExtension: OutExtension
  readonly platform: Platform
  readonly plugins: Plugins
  readonly shims: Shims
  readonly silent: boolean
  readonly splitting: Splitting
  readonly target: Target
  readonly treeshake: Treeshake
}

type CommonCJSBundleEntry = Exclude<ConfigOptions['entry'], Record<string, string> | undefined>

type ResolveCommonCJSBundleOptionsProps = {
  readonly entry: CommonCJSBundleEntry
  readonly esbuildOptions: ESBuildOptions
  readonly external: TSUpOptions['external'] | undefined
  readonly format: Format
  readonly keepNames: KeepNames
  readonly noExternal: TSUpOptions['noExternal'] | undefined
  readonly noExternalDefaults: NoExternalDefaults
  readonly outDir: OutDir
  readonly outputPath?: string
  readonly platform: Platform
  readonly plugins: Plugins
  readonly target: Target
  readonly treeshake: Treeshake
}

type ResolveCommonCJSBundleOptions = (props: ResolveCommonCJSBundleOptionsProps) => CommonCJSBundleOptions | null

type IncludeCJSBundleBuildOptions = Omit<IncludeCJSBundleConfigOptions, 'extra' | 'silent'>

type ResolveIncludeCJSBundleBuildOptionsProps = IncludeCJSBundleConfigOptions

type ResolveIncludeCJSBundleBuildOptions = (
  props: ResolveIncludeCJSBundleBuildOptionsProps
) => Promise<IncludeCJSBundleBuildOptions>

type IncludeCJSBundleEntry = CommonCJSBundleEntry

type ResolveIncludeCJSBundleEntryProps = Pick<ResolveEntryProps, 'entry' | 'mainEntryNotOutput' | 'srcDir'>

type ResolveIncludeCJSBundleEntry = (props: ResolveIncludeCJSBundleEntryProps) => IncludeCJSBundleEntry

type IncludeCJSBundleConfigOptions = CommonCJSBundleOptions

type IncludeCJSBundleOptions =
  | (IncludeCJSBundleConfigOptions & {
      readonly onSuccess: TSUpOptions['onSuccess']
    })
  | null

type ResolveIncludeCJSBundleOptionsProps = {
  readonly esbuildOptions: ESBuildOptions
  readonly external: TSUpOptions['external'] | undefined
  readonly format: Format
  readonly includeCJSBundle: IncludeCJSBundle
  readonly includeCJSBundleEntry: IncludeCJSBundleEntry
  readonly includeDistPackageJson: IncludeDistPackageJson
  readonly keepNames: KeepNames
  readonly noExternal: TSUpOptions['noExternal'] | undefined
  readonly noExternalDefaults: NoExternalDefaults
  readonly outDir: OutDir
  readonly platform: Platform
  readonly plugins: Plugins
  readonly silent: Silent
  readonly target: Target
  readonly treeshake: Treeshake
}

type ResolveIncludeCJSBundleOptions = (props: ResolveIncludeCJSBundleOptionsProps) => IncludeCJSBundleOptions

type Clean = boolean

type ResolveCleanProps = {
  readonly watch: Watch
}

type ResolveClean = (props: ResolveCleanProps) => Clean

type DeleteEmptyEmittedFiles = boolean

type ResolveDeleteEmptyEmittedFilesProps = {
  readonly deleteEmptyEmittedFiles?: ConfigOptions['deleteEmptyEmittedFiles'] | undefined
}

type ResolveDeleteEmptyEmittedFiles = (props: ResolveDeleteEmptyEmittedFilesProps) => DeleteEmptyEmittedFiles

type ResolvedESBuildOptions = Omit<Readonly<DefaultESBuildOptions>, 'logLevel'> & {
  readonly logLevel: LogLevel
}

type ESBuildOptionsContext = {
  readonly format: Format | 'iife'
}

// eslint-disable-next-line functional/prefer-immutable-types
type ESBuildOptions = (options: DefaultESBuildOptions, context: ESBuildOptionsContext) => ResolvedESBuildOptions

type ResolveESBuildOptionsProps = {
  readonly logLevel: LogLevel
}

type ResolveESBuildOptions = (props: ResolveESBuildOptionsProps) => ESBuildOptions

type ExcludeEntry = readonly string[] | null

type ResolveExcludeEntryProps = {
  readonly excludeEntry: ConfigOptions['excludeEntry']
  readonly srcDir: SrcDir
}

type ResolveExcludeEntry = (props: ResolveExcludeEntryProps) => ExcludeEntry

type ExcludeEntryDTS = boolean

type ResolveExcludeEntryDTSProps = {
  readonly excludeEntryDTS: ConfigOptions['excludeEntryDTS']
}

type ResolveExcludeEntryDTS = (props: ResolveExcludeEntryDTSProps) => ExcludeEntryDTS

type ExecuteOnWatch = boolean | string

type ResolveExecuteOnWatchProps = {
  readonly executeOnWatch: ExecuteOnWatch | undefined
}

type ResolveExecuteOnWatch = (props: ResolveExecuteOnWatchProps) => ExecuteOnWatch

type Format = 'cjs' | 'esm'

type ResolveFormatProps = {
  readonly packageJson: PackageJson
  readonly tsConfig: TSConfig
}

type ResolveFormat = (props: ResolveFormatProps) => Format

type IncludeDistPackageJson = boolean

type IsBrowser = boolean

type ResolveIsBrowserProps = {
  readonly tsConfig: TSConfig
}

type ResolveIsBrowser = (props: ResolveIsBrowserProps) => IsBrowser

type KeepNames = boolean

type ResolveKeepNamesProps = {
  readonly minify: TSUpOptions['minify'] | undefined
}

type ResolveKeepNames = (props: ResolveKeepNamesProps) => KeepNames

type ResolveLogLevelProps = {
  readonly logLevel: LogLevel | undefined
}

type ResolveLogLevel = (props: ResolveLogLevelProps) => LogLevel

type Minify = boolean

type ResolveMinifyProps = {
  readonly format: Format
  readonly isBrowser: IsBrowser
  readonly minify: TSUpOptions['minify'] | undefined
}

type ResolveMinify = (props: ResolveMinifyProps) => Minify

type NoExternalDefaults = boolean

type ResolveNoExternalDefaultsProps = {
  readonly noExternalDefaults: ConfigOptions['noExternalDefaults']
}

type ResolveNoExternalDefaults = (props: ResolveNoExternalDefaultsProps) => NoExternalDefaults

type OutDir = string

type SrcDir = string

type Options = {
  readonly augmentation: Augmentation
  readonly bundle: Bundle
  readonly clean: Clean
  readonly copy: Copy
  readonly deleteEmptyEmittedFiles: DeleteEmptyEmittedFiles
  readonly dts: TSUpOptions['dts']
  readonly dtsTimeout: DTSTimeout
  readonly entry: Entry
  readonly esbuildOptions: ESBuildOptions
  readonly excludeEntry: ExcludeEntry
  readonly excludeEntryDTS: ExcludeEntryDTS
  readonly executeOnWatch: ExecuteOnWatch
  readonly external: TSUpOptions['external'] | undefined
  readonly extraEntry: ExtraEntry | undefined
  readonly format: Format
  readonly includeCJSBundle: IncludeCJSBundle
  readonly includeCJSBundleEntry: IncludeCJSBundleEntry
  readonly includeCJSBundleOptions: IncludeCJSBundleOptions
  readonly includeDistPackageJson: IncludeDistPackageJson
  readonly isBrowser: IsBrowser
  readonly keepNames: KeepNames
  readonly logLevel: LogLevel
  readonly mainEntry: MainEntry
  readonly mainEntryNotOutput: MainEntry
  readonly minify: Minify
  readonly noExternal: TSUpOptions['noExternal'] | undefined
  readonly onSuccess: TSUpOptions['onSuccess'] | undefined
  readonly outDir: OutDir
  readonly outExtension: OutExtension
  readonly packageJson: PackageJson
  readonly platform: Platform
  readonly plugins: Plugins
  readonly silent: Silent
  readonly splitting: Splitting
  readonly srcDir: SrcDir
  readonly target: Target
  readonly treeshake: Treeshake
  readonly tsConfig: TSConfig
  readonly userEntry: ConfigOptions['entry']
  readonly watch: Watch
}

type ResolveOptions = (
  configOptions: ConfigOptions | undefined,
  defineConfigOptions: Readonly<DefineConfigOptions>
) => Promise<Options>

type OutExtension = Exclude<DefineConfigOptions['outExtension'], undefined>

type ResolveOutExtension = () => OutExtension

type Platform = 'browser' | 'node'

type ResolvePlatformProps = {
  readonly isBrowser: IsBrowser
}

type ResolvePlatform = (props: ResolvePlatformProps) => Platform

type ResolvePlugins = () => Plugins

type ResolveSilentProps = {
  readonly dts: TSUpOptions['dts']
  readonly silent: Silent | undefined
  readonly watch: Watch
}

type ResolveSilent = (props: ResolveSilentProps) => Silent

type Splitting = boolean

type SilentMessage = unknown

type ResolveSilentMessageProps = {
  readonly name: string | undefined
  readonly silent: Silent
}

type ResolveSilentMessage = (props: ResolveSilentMessageProps) => SilentMessage

type ResolveSplittingProps = {
  readonly isBrowser: IsBrowser
}

type ResolveSplitting = (props: ResolveSplittingProps) => Splitting

type Target = Exclude<DefineConfigOptions['target'], undefined>

type ResolveTargetProps = {
  readonly isBrowser: IsBrowser
  readonly tsConfig: TSConfig
}

type ResolveTarget = (props: ResolveTargetProps) => Target

type TSConfig = DeepReadonly<TSConfigJsonResolved & { readonly display?: string }>

type ResolveTSConfig = () => TSConfig

type Watch = boolean

type ResolveWatchProps = {
  readonly userEntry: ConfigOptions['entry']
  readonly watch: DefineConfigOptions['watch']
}

type ResolveWatch = (props: ResolveWatchProps) => Watch

export type {
  Augmentation,
  Bundle,
  CommonCJSBundleOptions,
  DeleteEmptyEmittedFiles,
  Entry,
  ESBuildOptions,
  ExcludeEntry,
  ExcludeEntryDTS,
  ExecuteOnWatch,
  Format,
  IncludeCJSBundle,
  IncludeCJSBundleConfigOptions,
  IncludeCJSBundleEntry,
  IncludeDistPackageJson,
  KeepNames,
  Minify,
  NoExternalDefaults,
  Options,
  OutDir,
  OutExtension,
  Platform,
  Plugins,
  ResolveAugmentation,
  ResolveBundle,
  ResolveClean,
  ResolveCommonCJSBundleOptions,
  ResolveDeleteEmptyEmittedFiles,
  ResolveESBuildOptions,
  ResolveExcludeEntry,
  ResolveExcludeEntryDTS,
  ResolveExecuteOnWatch,
  ResolveFormat,
  ResolveIncludeCJSBundle,
  ResolveIncludeCJSBundleBuildOptions,
  ResolveIncludeCJSBundleEntry,
  ResolveIncludeCJSBundleOptions,
  ResolveIsBrowser,
  ResolveKeepNames,
  ResolveLogLevel,
  ResolveMinify,
  ResolveNoExternalDefaults,
  ResolveOptions,
  ResolveOutExtension,
  ResolvePlatform,
  ResolvePlugins,
  ResolveSilent,
  ResolveSilentMessage,
  ResolveSplitting,
  ResolveTarget,
  ResolveTSConfig,
  ResolveWatch,
  Shims,
  Silent,
  Splitting,
  Target,
  Treeshake,
  Watch
}
