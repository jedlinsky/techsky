import type { Plugins } from 'resolveOptions/plugins/index.js'
import type { EntryPath } from 'resolveOptions/resolveEntry/types.js'
import type {
  Bundle,
  CommonCJSBundleOptions,
  Entry,
  ESBuildOptions,
  Format,
  KeepNames,
  Minify,
  NoExternalDefaults,
  Options,
  OutDir,
  OutExtension,
  Platform,
  Splitting,
  Target,
  Treeshake
} from 'resolveOptions/types.js'
import type { ConfigOptions, ConfigOptionsExtraEntryOptions, TSUpOptions } from 'types.js'

type _ResolvedExtraEntries = {
  readonly entry: string
  readonly options?: ConfigOptionsExtraEntryOptions | undefined
  readonly outDir: OutputDirectory
  readonly outputPath: OutputPath
}

type ResolvedExtraEntries = readonly _ResolvedExtraEntries[]

type ResolveExtraEntriesProps = {
  readonly extraEntry: Exclude<ConfigOptions['extraEntry'], undefined>
  readonly format: Format
  readonly outDir: Options['outDir']
  readonly pick: Format
  readonly srcDir: Options['srcDir']
}

type ResolveExtraEntries = (props: ResolveExtraEntriesProps) => ResolvedExtraEntries | null

type ExtraEntryCJS = readonly _ExtraEntryCJSOptions[]

type ResolveExtraEntryCJSProps = {
  readonly dts: TSUpOptions['dts']
  readonly esbuildOptions: ESBuildOptions
  readonly external: TSUpOptions['external'] | undefined
  readonly extraEntry: Exclude<ConfigOptions['extraEntry'], undefined>
  readonly format: Format
  readonly keepNames: KeepNames
  readonly noExternal: TSUpOptions['noExternal'] | undefined
  readonly noExternalDefaults: NoExternalDefaults
  readonly outDir: OutDir
  readonly platform: Platform
  readonly plugins: Plugins
  readonly srcDir: Options['srcDir']
  readonly target: Target
  readonly treeshake: Treeshake
}

type ResolveExtraEntryCJS = (props: ResolveExtraEntryCJSProps) => ExtraEntryCJS | null

type _ExtraEntryCJSOptions = CommonCJSBundleOptions &
  ConfigOptionsExtraEntryOptions & {
    readonly dts: TSUpOptions['dts']
    readonly onSuccess: TSUpOptions['onSuccess']
  }

type ExtraEntryCJSOptions = _ExtraEntryCJSOptions | null

type ResolveExtraEntryCJSOptionsProps = _ResolvedExtraEntries &
  Pick<
    ResolveExtraEntryCJSProps,
    | 'dts'
    | 'esbuildOptions'
    | 'external'
    | 'format'
    | 'keepNames'
    | 'noExternal'
    | 'noExternalDefaults'
    | 'platform'
    | 'plugins'
    | 'target'
    | 'treeshake'
  >

type ResolveExtraEntryCJSOptions = (props: ResolveExtraEntryCJSOptionsProps) => ExtraEntryCJSOptions

type ExtraEntryESM = readonly _ExtraEntryESMOptions[]

type ResolveExtraEntryESMProps = {
  readonly dts: TSUpOptions['dts']
  readonly esbuildOptions: ESBuildOptions
  readonly external: TSUpOptions['external'] | undefined
  readonly extraEntry: Exclude<ConfigOptions['extraEntry'], undefined>
  readonly format: Format
  readonly keepNames: KeepNames
  readonly minify: Minify
  readonly noExternal: TSUpOptions['noExternal'] | undefined
  readonly outDir: OutDir
  readonly platform: Platform
  readonly plugins: Plugins
  readonly srcDir: Options['srcDir']
  readonly target: Target
  readonly treeshake: Treeshake
}

type ResolveExtraEntryESM = (props: ResolveExtraEntryESMProps) => ExtraEntryESM | null

type _ExtraEntryESMOptions = ConfigOptionsExtraEntryOptions & {
  readonly bundle: Bundle
  readonly dts: TSUpOptions['dts']
  readonly entry: Exclude<Entry, null>
  readonly esbuildOptions: ESBuildOptions
  readonly external?: TSUpOptions['external']
  readonly format: Format
  readonly keepNames: KeepNames
  readonly minify: Minify
  readonly noExternal?: TSUpOptions['noExternal']
  readonly outDir: OutDir
  readonly outExtension: OutExtension
  readonly platform: Platform
  readonly plugins: Plugins
  readonly silent: boolean
  readonly splitting: Splitting
  readonly target: Target
  readonly treeshake: Treeshake
}

type ExtraEntryESMOptions = _ExtraEntryESMOptions

type ResolveExtraEntryESMOptionsProps = Omit<_ResolvedExtraEntries, 'outputPath'> &
  Pick<
    ResolveExtraEntryESMProps,
    | 'dts'
    | 'esbuildOptions'
    | 'external'
    | 'format'
    | 'keepNames'
    | 'minify'
    | 'noExternal'
    | 'platform'
    | 'plugins'
    | 'target'
    | 'treeshake'
  >

type ResolveExtraEntryESMOptions = (props: ResolveExtraEntryESMOptionsProps) => ExtraEntryESMOptions

type ExtraEntry = {
  readonly cjs: ExtraEntryCJS | null
  readonly esm: ExtraEntryESM | null
}

type ResolveExtraEntryProps = {
  readonly dts: TSUpOptions['dts']
  readonly esbuildOptions: ESBuildOptions
  readonly external: TSUpOptions['external'] | undefined
  readonly extraEntry: ConfigOptions['extraEntry']
  readonly format: Format
  readonly keepNames: KeepNames
  readonly minify: Minify
  readonly noExternal: TSUpOptions['noExternal'] | undefined
  readonly noExternalDefaults: NoExternalDefaults
  readonly outDir: OutDir
  readonly platform: Platform
  readonly plugins: Plugins
  readonly srcDir: Options['srcDir']
  readonly target: Target
  readonly treeshake: Treeshake
}

type ResolveExtraEntry = (props: ResolveExtraEntryProps) => ExtraEntry | undefined

type OutputDirectory = string

type ResolveOutputDirectoryProps = {
  readonly resolvedOutputPath: OutputPath
}

type ResolveOutputDirectory = (props: ResolveOutputDirectoryProps) => OutputDirectory

type OutputExtension = 'cjs' | 'd.ts' | 'js' | 'mjs'

type ResolveOutputExtensionProps = {
  readonly entryFormat: Format
  readonly format: Format
}

type ResolveOutputExtension = (props: ResolveOutputExtensionProps) => OutputExtension

type OutputPath = string

type ResolveExtension = () => OutputExtension

type ResolveOutputPathProps = {
  readonly outDir: Options['outDir']
  readonly resolvedEntryPath: EntryPath
  readonly resolveExtension: ResolveExtension
  readonly srcDir: Options['srcDir']
}

type ResolveOutputPath = (props: ResolveOutputPathProps) => OutputPath

type OutputPathWithoutExtension = string

type ResolveOutputPathWithoutExtensionProps = {
  readonly resolvedExtension: OutputExtension
  readonly segment: string
}

type ResolveOutputPathWithoutExtension = (props: ResolveOutputPathWithoutExtensionProps) => OutputPathWithoutExtension

export type {
  ExtraEntry,
  ExtraEntryCJS,
  ExtraEntryESM,
  ResolvedExtraEntries,
  ResolveExtraEntries,
  ResolveExtraEntry,
  ResolveExtraEntryCJS,
  ResolveExtraEntryCJSOptions,
  ResolveExtraEntryESM,
  ResolveExtraEntryESMOptions,
  ResolveOutputDirectory,
  ResolveOutputExtension,
  ResolveOutputPath,
  ResolveOutputPathWithoutExtension
}
