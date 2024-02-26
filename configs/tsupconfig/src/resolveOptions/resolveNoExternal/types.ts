import type { Format, NoExternalDefaults, OutDir } from 'resolveOptions/types.js'
import type { ConfigOptions } from 'types.js'

type ResolveNoExternalCJSBundleProps = {
  readonly noExternal: ConfigOptions['noExternal']
  readonly noExternalDefaults: NoExternalDefaults
  readonly outDir: OutDir
  readonly outputPath?: string | undefined
}

type ResolveNoExternalCJSBundle = (props: ResolveNoExternalCJSBundleProps) => Promise<ConfigOptions['noExternal']>

type ResolveNoExternalProps = {
  readonly format: Format
  readonly noExternal: ConfigOptions['noExternal']
  readonly noExternalDefaults: NoExternalDefaults
  readonly outDir: OutDir
}

type ResolveNoExternal = (props: ResolveNoExternalProps) => Promise<ConfigOptions['noExternal']>

export type { ResolveNoExternal, ResolveNoExternalCJSBundle }
