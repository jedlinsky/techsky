import type { Loaders as DefaultLoaders, PublicExplorerSync, TransformSync } from 'cosmiconfig'
import type { ReadonlyDeep } from 'type-fest'

type PrettierExplorer = ReadonlyDeep<PublicExplorerSync>

type GetExplorerProps = {
  readonly cache: boolean
}

type GetExplorer = (props: GetExplorerProps) => PrettierExplorer

type Loaders = ReadonlyDeep<DefaultLoaders>

type SearchPlaces = readonly string[]

type Transform = ReadonlyDeep<TransformSync>

export type { GetExplorer, Loaders, SearchPlaces, Transform }
