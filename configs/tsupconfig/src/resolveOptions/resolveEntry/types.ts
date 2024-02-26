import type { MainEntry } from 'resolveOptions/resolveMainEntry/types.js'
import type { Augmentation, Bundle, ExcludeEntry, ExcludeEntryDTS, Options } from 'resolveOptions/types.js'
import type { ConfigOptions } from 'types.js'

type AugmentationPaths = readonly string[] | null

type ResolveAugmentationPathsProps = {
  readonly augmentation: Augmentation | undefined
}

type ResolveAugmentationPaths = (props: ResolveAugmentationPathsProps) => AugmentationPaths

type Entry = Exclude<ConfigOptions['entry'], undefined>

type ResolveEntryProps = {
  readonly augmentation?: Augmentation
  readonly bundle: Bundle
  readonly entry: ConfigOptions['entry']
  readonly excludeEntry?: ExcludeEntry
  readonly excludeEntryDTS?: ExcludeEntryDTS
  readonly extraEntry?: ConfigOptions['extraEntry']
  readonly mainEntryNotOutput: MainEntry
  readonly srcDir: Options['srcDir']
}

type ResolveEntry = (props: ResolveEntryProps) => Entry

type EntryExclude = readonly string[] | null

type ResolveEntryExcludeProps = {
  readonly augmentation: Augmentation | undefined
  readonly excludeEntry: ExcludeEntry | undefined
  readonly excludeEntryDTS: ExcludeEntryDTS | undefined
  readonly extraEntry: ConfigOptions['extraEntry']
  readonly srcDir: Options['srcDir']
}

type ResolveEntryExclude = (props: ResolveEntryExcludeProps) => EntryExclude

type EntryExcludePaths = readonly string[]

type ResolveEntryExcludePathsProps = {
  readonly paths: readonly string[]
}

type ResolveEntryExcludePaths = (props: ResolveEntryExcludePathsProps) => EntryExcludePaths

type EntryPath = string

type ResolveEntryPathProps = {
  readonly path: string
  readonly srcDir: Options['srcDir']
}

type ResolveEntryPath = (props: ResolveEntryPathProps) => EntryPath

type ExcludeEntryDTSPaths = readonly string[] | null

type ResolveExcludeEntryDTSPathsProps = {
  readonly excludeEntryDTS: ExcludeEntryDTS | undefined
  readonly srcDir: Options['srcDir']
}

type ResolveExcludeEntryDTSPaths = (props: ResolveExcludeEntryDTSPathsProps) => ExcludeEntryDTSPaths

type ExcludeEntryPaths = readonly string[] | null

type ResolveExcludeEntryPathsProps = {
  readonly excludeEntry: ExcludeEntry | undefined
}

type ResolveExcludeEntryPaths = (props: ResolveExcludeEntryPathsProps) => ExcludeEntryPaths

type ExtraEntryPaths = readonly string[] | null

type ResolveExtraEntryPathsProps = {
  readonly extraEntry: ConfigOptions['extraEntry']
  readonly srcDir: Options['srcDir']
}

type ResolveExtraEntryPaths = (props: ResolveExtraEntryPathsProps) => ExtraEntryPaths

export type {
  Entry,
  EntryPath,
  ResolveAugmentationPaths,
  ResolveEntry,
  ResolveEntryExclude,
  ResolveEntryExcludePaths,
  ResolveEntryPath,
  ResolveEntryProps,
  ResolveExcludeEntryDTSPaths,
  ResolveExcludeEntryPaths,
  ResolveExtraEntryPaths
}
