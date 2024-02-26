import type { Import } from 'rules/importExtension/listenImports/resolveImport/types.js'

type FixerValue = {
  readonly hasSuffix: HasSuffix
  readonly message: string
  readonly range: Range
}

type ResolveFixerValueProps = {
  readonly name: string
  readonly nameExtension: string
  readonly node: Import['node']
}

type ResolveFixerValue = (props: ResolveFixerValueProps) => FixerValue

type HasSuffix = boolean

type ResolveHasSuffixProps = {
  readonly name: string
  readonly suffix: Suffix
}

type ResolveHasSuffix = (props: ResolveHasSuffixProps) => HasSuffix

type Message = string

type ResolveMessageProps = {
  readonly remove: Remove
}

type ResolveMessage = (props: ResolveMessageProps) => Message

type Range = readonly [number, number]

type ResolveRangeProps = {
  readonly name: string
  readonly node: Import['node']
  readonly remove: Remove
}

type ResolveRange = (props: ResolveRangeProps) => Range

type Remove = string

type ResolveRemoveProps = {
  readonly hasSuffix: HasSuffix
  readonly nameExtension: string
}

type ResolveRemove = (props: ResolveRemoveProps) => Remove

type Suffix = string

type ResolveSuffixProps = {
  readonly nameExtension: string
}

type ResolveSuffix = (props: ResolveSuffixProps) => Suffix

export type {
  FixerValue,
  ResolveFixerValue,
  ResolveHasSuffix,
  ResolveMessage,
  ResolveRange,
  ResolveRemove,
  ResolveSuffix
}
