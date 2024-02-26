import type { BuildResult, Plugin } from 'esbuild'
import type { Options } from 'resolveOptions/types.js'

type EmptyEmittedFiles = readonly string[] | null

type GetEmptyEmittedFilesProps = {
  readonly buildResult: BuildResult
}

type GetEmptyEmittedFiles = (props: GetEmptyEmittedFilesProps) => EmptyEmittedFiles

type PreparePublish = (options: Options) => Plugin

export type { EmptyEmittedFiles, GetEmptyEmittedFiles, PreparePublish }
