import type { Silent } from 'types.js'

type Type = 'cjs' | 'cli' | 'cpy' | 'del' | 'dts' | 'esm' | 'tsa-info' | 'tsa'

type LoggerProps = {
  readonly silent: Silent
  readonly text: string
  readonly type?: Type
}

type Logger = (props: LoggerProps) => void

type ResolvedType = string

type ResolveTypeProps = {
  readonly format: Type | undefined
}

type ResolveType = (props: ResolveTypeProps) => ResolvedType

export type { Logger, ResolveType }
