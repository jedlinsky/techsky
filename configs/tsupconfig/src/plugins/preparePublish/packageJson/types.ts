import type { EmptyEmittedFiles } from 'plugins/preparePublish/types.js'
import type { MainEntry } from 'resolveOptions/resolveMainEntry/types.js'
import type { Exports, PackageJson } from 'resolveOptions/resolvePackageJson/types.js'
import type { DeleteEmptyEmittedFiles, Options } from 'resolveOptions/types.js'

type PreparePublishOptions = Options & {
  readonly emptyEmittedFiles: EmptyEmittedFiles
}

type IsEntryEmpty = boolean

type IsEntryEmptyCheck = (entry: MainEntry) => IsEntryEmpty

type GetIsEntryEmptyCheckProps = {
  readonly deleteEmptyEmittedFiles: DeleteEmptyEmittedFiles
  readonly emptyEmittedFiles: EmptyEmittedFiles
  readonly outDir: PreparePublishOptions['outDir']
}

type GetIsEntryEmptyCheck = (props: GetIsEntryEmptyCheckProps) => IsEntryEmptyCheck

type IncludeCJSBundlePath = string

type ResolveIncludeCJSBundlePathProps = {
  // eslint-disable-next-line no-secrets/no-secrets
  readonly includeCJSBundleEntry: PreparePublishOptions['includeCJSBundleEntry']
  readonly srcDir: PreparePublishOptions['srcDir']
}

type ResolveIncludeCJSBundlePath = (props: ResolveIncludeCJSBundlePathProps) => IncludeCJSBundlePath

type ExportsBrowser = {
  readonly browser: string
  readonly types?: string
}

type ExportsTypes = {
  readonly types?: string
}

type CJSExports =
  | ResolvedExportsNonNullable
  | {
      readonly [key: string]:
        | ExportsBrowser
        | ExportsTypes
        | {
            readonly require: string
            readonly types?: string
          }
    }
  | undefined

type CJS = {
  readonly exports: CJSExports
  readonly main?: string
  readonly type: 'commonjs' | undefined
  readonly types?: string
}

type ResolveCJSProps = {
  readonly hasDTS: boolean
  readonly isBrowser: PreparePublishOptions['isBrowser']
  readonly isEntryEmptyCheck: IsEntryEmptyCheck
  readonly mainEntry: MainEntry
  readonly resolvedExports: ResolvedExports
}

type ResolveCJS = (props: ResolveCJSProps) => CJS

type ESMExports =
  | ResolvedExportsNonNullable
  | {
      readonly [key: string]:
        | ExportsBrowser
        | ExportsTypes
        | {
            readonly import: string
            readonly types?: string
          }
    }
  | undefined

type ESM = {
  readonly exports: ESMExports
  readonly type: 'module' | undefined
}

type ResolveESMProps = {
  readonly hasDTS: boolean
  readonly includeCJSBundle: PreparePublishOptions['includeCJSBundle']
  readonly includeCJSBundleEntry: PreparePublishOptions['includeCJSBundleEntry']
  readonly isBrowser: PreparePublishOptions['isBrowser']
  readonly isEntryEmptyCheck: IsEntryEmptyCheck
  readonly mainEntry: MainEntry
  readonly resolvedExports: ResolvedExports
  readonly srcDir: PreparePublishOptions['srcDir']
}

type ResolveESM = (props: ResolveESMProps) => ESM

type ResolvedExportsNonNullable = Exclude<Exports, string>

type ResolvedExports = ResolvedExportsNonNullable | null

type ResolveExportsProps = {
  readonly bundle: PreparePublishOptions['bundle']
  readonly mainEntry: MainEntry
  readonly packageJson: PreparePublishOptions['packageJson']
  readonly srcDir: PreparePublishOptions['srcDir']
}

type ResolveExports = (options: ResolveExportsProps) => ResolvedExports

type ResolvedModuleExports = CJSExports | ESMExports

type ResolvedModuleExportsNonUndefinable = Exclude<ResolvedModuleExports, undefined>

type ResolvedModule = {
  readonly exports: ResolvedModuleExports | undefined
  readonly main?: string
  readonly type: 'commonjs' | 'module' | undefined
  readonly types?: string
}

type ResolveModuleProps = {
  readonly format: PreparePublishOptions['format']
  readonly hasDTS: boolean
  readonly includeCJSBundle: PreparePublishOptions['includeCJSBundle']
  readonly includeCJSBundleEntry: PreparePublishOptions['includeCJSBundleEntry']
  readonly isBrowser: PreparePublishOptions['isBrowser']
  readonly isEntryEmptyCheck: IsEntryEmptyCheck
  readonly mainEntry: MainEntry
  readonly resolvedExports: ResolvedExports
  readonly srcDir: PreparePublishOptions['srcDir']
}

type ResolveModule = (props: ResolveModuleProps) => ResolvedModule

type ResolveModuleExportsProps = {
  readonly augmentation: PreparePublishOptions['augmentation']
  readonly moduleExports: ResolvedModuleExports
  readonly srcDir: PreparePublishOptions['srcDir']
}

type AugmentationExports =
  | {
      readonly [key: string]: {
        readonly types: string
      }
    }
  | undefined

type AugmentationExportsEntries = readonly (readonly [string, { readonly types: string }])[]

type ResolvedModuleExportsWithAugmentation = AugmentationExports | ResolvedModuleExports

type ResolveModuleExports = (props: ResolveModuleExportsProps) => ResolvedModuleExportsWithAugmentation

type RequiredPackageJson = Required<PackageJson>

type ResolvedPackageJsonScripts = {
  readonly postinstall: Required<RequiredPackageJson['scripts']['postinstall']>
}

type ResolvedPackageJson = {
  readonly author?: RequiredPackageJson['author']
  readonly bin?: RequiredPackageJson['bin']
  readonly contributors?: RequiredPackageJson['contributors']
  readonly dependencies?: RequiredPackageJson['dependencies']
  readonly description?: RequiredPackageJson['description']
  readonly engines?: RequiredPackageJson['engines']
  readonly exports?: ResolvedModuleExports
  readonly funding?: RequiredPackageJson['funding']
  readonly homepage?: RequiredPackageJson['homepage']
  readonly keywords?: RequiredPackageJson['keywords']
  readonly license?: RequiredPackageJson['license']
  readonly main?: RequiredPackageJson['main']
  readonly maintainers?: RequiredPackageJson['maintainers']
  readonly name: RequiredPackageJson['name']
  readonly packageManager?: RequiredPackageJson['packageManager']
  readonly peerDependencies?: RequiredPackageJson['peerDependencies']
  readonly private: RequiredPackageJson['private']
  readonly publishConfig?: RequiredPackageJson['publishConfig']
  readonly repository?: RequiredPackageJson['repository']
  readonly scripts?: ResolvedPackageJsonScripts
  readonly sideEffects?: RequiredPackageJson['sideEffects']
  readonly type?: RequiredPackageJson['type']
  readonly types?: RequiredPackageJson['types']
  readonly version?: RequiredPackageJson['version']
}

type ResolvePackageJson = (options: PreparePublishOptions) => ResolvedPackageJson

type PublishConfig = Exclude<PackageJson['publishConfig'], undefined> | null

type ResolvePublishConfigProps = {
  readonly packageJson: PackageJson
}

type ResolvePublishConfig = (props: ResolvePublishConfigProps) => PublishConfig

type SideEffects = RequiredPackageJson['sideEffects'] | undefined

type ResolveSideEffectsProps = {
  readonly format: PreparePublishOptions['format']
  readonly packageJson: PackageJson
}

type ResolveSideEffects = (props: ResolveSideEffectsProps) => SideEffects

type WritePackageJson = (options: PreparePublishOptions) => Promise<void>

export type {
  AugmentationExportsEntries,
  CJSExports,
  ESMExports,
  GetIsEntryEmptyCheck,
  ResolveCJS,
  ResolvedModuleExports,
  ResolvedModuleExportsNonUndefinable,
  ResolvedPackageJson,
  ResolveESM,
  ResolveExports,
  ResolveIncludeCJSBundlePath,
  ResolveModule,
  ResolveModuleExports,
  ResolvePackageJson,
  ResolvePublishConfig,
  ResolveSideEffects,
  WritePackageJson
}
