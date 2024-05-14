import type { LogLevel } from 'esbuild'
import type { defineConfig, Options as _TSUpOptions } from 'tsup'
import type { ESBuildOptions, ExecuteOnWatch, Format, Platform, Plugins } from './resolveOptions/types.js'

type DefineConfigOptions = _TSUpOptions

type Minify = boolean | 'keepNames'

type Treeshake = Exclude<DefineConfigOptions['treeshake'], undefined>

type DTSTimeout = number

type NoExternalDefaults = boolean

type Silent = boolean | 'minimal'

type TSUpOptions =
  Pick<
    DefineConfigOptions,
    'bundle' | 'dts' | 'entry' | 'esbuildPlugins' | 'external' | 'noExternal' | 'onSuccess'
  > extends infer TPicked
    ? TPicked extends object
      ? {
          readonly [TKey in keyof TPicked]-?: TPicked[TKey]
        } & {
          readonly minify: Minify
        }
      : never
    : never

type ConfigOptionsIncludeCJSBundle = boolean

type ConfigOptionsIncludeDistPackageJson = boolean

type ConfigOptionsAugmentation = readonly string[]

type ConfigOptionsCopy = readonly (
  | string
  | readonly string[]
  | {
      readonly from: string | readonly string[]
      readonly to: string
    }
)[]

type ConfigOptionsEntry = TSUpOptions['entry'] | null

type ConfigOptionsExcludeEntry = readonly string[]

type ConfigOptionsExcludeEntryDTS = boolean

type ConfigOptionsExtraEntryOptions =
  Pick<
    DefineConfigOptions,
    | 'banner'
    | 'bundle'
    | 'config'
    | 'define'
    | 'env'
    | 'footer'
    | 'globalName'
    | 'inject'
    | 'injectStyle'
    | 'jsxFactory'
    | 'jsxFragment'
    | 'keepNames'
    | 'loader'
    | 'name'
    | 'replaceNodeEnv'
    | 'shims'
    | 'target'
    | 'treeshake'
    | 'tsconfig'
  > extends infer TPicked
    ? TPicked extends object
      ? TPicked & {
          readonly esbuildOptions?: ESBuildOptions
          readonly minify?: boolean
          readonly platform?: Platform
          readonly plugins?: Plugins
        }
      : never
    : never

type _ConfigOptionsExtraEntry = {
  readonly format?: Format
  readonly options?: ConfigOptionsExtraEntryOptions
  readonly path: string
}

type ConfigOptionsExtraEntry = readonly _ConfigOptionsExtraEntry[]

type ConfigOptions = {
  readonly augmentation?: ConfigOptionsAugmentation
  readonly bundle?: TSUpOptions['bundle']
  readonly copy?: ConfigOptionsCopy
  readonly deleteEmptyEmittedFiles?: boolean
  readonly dts?: TSUpOptions['dts']
  readonly dtsTimeout?: DTSTimeout
  readonly entry?: ConfigOptionsEntry
  readonly esbuildPlugins?: TSUpOptions['esbuildPlugins']
  readonly excludeEntry?: ConfigOptionsExcludeEntry
  readonly excludeEntryDTS?: ConfigOptionsExcludeEntryDTS
  readonly executeOnWatch?: ExecuteOnWatch
  readonly external?: TSUpOptions['external']
  readonly extraEntry?: ConfigOptionsExtraEntry
  readonly includeCJSBundle?: ConfigOptionsIncludeCJSBundle
  readonly includeDistPackageJson?: ConfigOptionsIncludeDistPackageJson
  readonly logLevel?: LogLevel
  readonly minify?: Minify
  readonly noExternal?: TSUpOptions['noExternal']
  readonly noExternalDefaults?: NoExternalDefaults
  readonly onSuccess?: TSUpOptions['onSuccess']
  readonly silent?: Silent
}

type Config = (configOptions?: ConfigOptions) => ReturnType<typeof defineConfig>

export type {
  Config,
  ConfigOptions,
  ConfigOptionsExtraEntryOptions,
  DefineConfigOptions,
  DTSTimeout,
  LogLevel,
  Silent,
  Treeshake,
  TSUpOptions
}
