import type { Options } from 'resolveOptions/types.js'

type MainEntryNonNullable = string

type MainEntry = MainEntryNonNullable | null

type MainEntryNonNullableUndefinable = MainEntryNonNullable | undefined

type PrependCurrentDirectoryNotation = (mainEntry: MainEntryNonNullable) => MainEntryNonNullable

type ResolveBundleProps = {
  readonly bundle: Options['bundle']
  readonly srcDir: Options['srcDir']
}

type ResolveBundle = (props: ResolveBundleProps) => MainEntryNonNullableUndefinable

type ResolveDefaultProps = {
  readonly srcDir: Options['srcDir']
}

type ResolveDefault = (props: ResolveDefaultProps) => MainEntryNonNullable

type ResolveMainEntryProps = Pick<
  Options,
  'bundle' | 'format' | 'packageJson' | 'srcDir' | 'tsConfig' | 'userEntry'
> & { readonly forOutput?: boolean }

type ResolveMainEntry = (props: ResolveMainEntryProps) => MainEntry | null

type ResolvePackageJsonProps = {
  readonly format: Options['format']
  readonly packageJson: Options['packageJson']
}

type ResolvePackageJson = (props: ResolvePackageJsonProps) => MainEntryNonNullableUndefinable

type ResolveTSConfigProps = {
  readonly tsConfig: Options['tsConfig']
}

type ResolveTSConfig = (props: ResolveTSConfigProps) => MainEntryNonNullableUndefinable

type ResolveUserEntryProps = {
  readonly srcDir: Options['srcDir']
  readonly userEntry: Options['userEntry']
}

type ResolveUserEntry = (props: ResolveUserEntryProps) => MainEntryNonNullableUndefinable

export type {
  MainEntry,
  MainEntryNonNullable,
  PrependCurrentDirectoryNotation,
  ResolveBundle,
  ResolveDefault,
  ResolveMainEntry,
  ResolvePackageJson,
  ResolveTSConfig,
  ResolveUserEntry
}
