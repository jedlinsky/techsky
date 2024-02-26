import type { Suffix } from 'rules/importExtension/resolveReport/resolveAlways/types.js'
import type { MapTSToJS } from 'rules/importExtension/types.js'

type ResolvedExisting = readonly string[]

type GetResolvedExistingProps = {
  readonly existing: Existing
  readonly mapTSToJS: MapTSToJS
}

type GetResolvedExisting = (props: GetResolvedExistingProps) => ResolvedExisting

type ExtensionMap = Record<string, string>

type ResolvedFilePathExtension = string

type GetResolvedFilePathExtensionProps = {
  readonly filePathExtension: string | null
  readonly mapTSToJS: MapTSToJS
}

type GetResolvedFilePathExtension = (props: GetResolvedFilePathExtensionProps) => ResolvedFilePathExtension

type Append = string

type ResolveAppendProps = {
  readonly resolvedFilePathExtension: ResolvedFilePathExtension
  readonly suffix: Suffix
}

type ResolveAppend = (props: ResolveAppendProps) => Append

type ResolvedFilePath = string

type Existing = readonly string[]

type ResolveExistingProps = {
  readonly resolvedFilePath: ResolvedFilePath
}

type ResolveExisting = (props: ResolveExistingProps) => Existing

type FixerValueNonNullable = {
  readonly append: string
  readonly hasSuffix: boolean
  readonly message: Message
}

type FixerValue = FixerValueNonNullable | null

type ResolveFixerValueProps = {
  readonly mapTSToJS: MapTSToJS
  readonly resolvedFilePath: ResolvedFilePath
  readonly suffix: Suffix
}

type ResolveFixerValue = (props: ResolveFixerValueProps) => FixerValue

type PriorityExtensions = readonly string[]

type FilePathExtension = string | null

type ResolveFilePathExtensionProps = {
  readonly existing: Existing
}

type ResolveFilePathExtension = (props: ResolveFilePathExtensionProps) => FilePathExtension

type Message = string

type ResolveMessageProps = {
  readonly resolvedExisting: Existing
  readonly suffix: Suffix
}

type ResolveMessage = (props: ResolveMessageProps) => Message

export type {
  ExtensionMap,
  FixerValueNonNullable,
  GetResolvedExisting,
  GetResolvedFilePathExtension,
  PriorityExtensions,
  ResolveAppend,
  ResolveExisting,
  ResolveFilePathExtension,
  ResolveFixerValue,
  ResolveMessage
}
