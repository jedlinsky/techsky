import type { BuildResult, Plugin } from 'esbuild'
import type { Options } from 'resolveOptions/types.js'

type EmptyEmittedFiles = readonly string[] | null

type GetEmptyEmittedFilesProps = {
  readonly buildResult: BuildResult
}

type GetEmptyEmittedFiles = (props: GetEmptyEmittedFilesProps) => EmptyEmittedFiles

type PreparePublishOptions = Pick<
  Options,
  | 'augmentation'
  | 'bundle'
  | 'deleteEmptyEmittedFiles'
  | 'dts'
  | 'format'
  | 'includeCJSBundle'
  | 'includeCJSBundleEntry'
  | 'isBrowser'
  | 'mainEntry'
  | 'outDir'
  | 'packageJson'
  | 'srcDir'
>

type PreparePublish = (options: PreparePublishOptions) => Plugin

export type { EmptyEmittedFiles, GetEmptyEmittedFiles, PreparePublish, PreparePublishOptions }
