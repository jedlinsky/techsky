import type { OutDir, Silent } from 'resolveOptions/types.js'

type FileExists = (path: string) => Promise<boolean>

type RemoveReplacerProps = {
  readonly baseUrlReplacerPaths: BaseUrlReplacerPaths
  readonly bundledBaseUrlReplacerPath: string
  readonly silent: Silent
}

type RemoveReplacer = (props: RemoveReplacerProps) => Promise<void>

type ReplaceTSCAliasPathsProps = {
  readonly outDir: OutDir
  readonly silent: Silent
}

type ReplaceTSCAliasPaths = (props: ReplaceTSCAliasPathsProps) => Promise<void>

type BaseUrlReplacerPaths = {
  readonly distPath: string | null
  readonly sourcePath: string | null
}

type ResolveBaseUrlReplacerPathsProps = {
  readonly tscAliasPathsDirectoryPath: string
}

type ResolveBaseUrlReplacerPaths = (props: ResolveBaseUrlReplacerPathsProps) => Promise<BaseUrlReplacerPaths>

export type { FileExists, RemoveReplacer, ReplaceTSCAliasPaths, ResolveBaseUrlReplacerPaths }
