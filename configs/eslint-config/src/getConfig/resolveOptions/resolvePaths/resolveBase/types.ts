import type { A } from 'ts-toolbelt'
import type { Path } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import type { Root } from 'getConfig/resolveOptions/resolvePaths/resolveRoot'

type Base = A.Compute<
  Path<'withRoot'> & {
    readonly entries: BaseEntries
  }
>

type ResolveBaseProps = {
  readonly baseUrl: string | undefined
  readonly cwd: string
  readonly root: Root
  readonly tsConfigBase: Base
  readonly tsConfigHasBaseUrl: boolean
}

type ResolveBase = (props: ResolveBaseProps) => Base

type BaseEntries = readonly string[]

type BaseWithoutEntries = Path<'withRoot'>

type ResolveBaseEntriesProps = {
  readonly baseWithoutEntries: BaseWithoutEntries
}

type ResolveBaseEntries = (props: ResolveBaseEntriesProps) => BaseEntries

type ResolveBaseGenericProps = {
  readonly baseUrl: string | undefined
  readonly cwd: string
  readonly root: Root
}

type ResolveBaseGeneric = (props: ResolveBaseGenericProps) => Base

export type { Base, ResolveBase, ResolveBaseEntries, ResolveBaseGeneric }
