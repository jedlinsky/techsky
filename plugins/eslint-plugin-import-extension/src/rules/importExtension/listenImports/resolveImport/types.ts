import type { TSESTree } from '@typescript-eslint/utils'
import type { BaseDirectory } from 'rules/importExtension/listenImports/types.js'

type FilePath = string | null

type ResolveFilePathProps = {
  readonly baseDirectory: BaseDirectory
  readonly name: string
}

type ResolveFilePath = (props: ResolveFilePathProps) => FilePath

type IsModule = boolean

type ResolveIsModuleProps = {
  readonly name: string
}

type ResolveIsModule = (props: ResolveIsModuleProps) => IsModule

type Node = TSESTree.Node

type Import = {
  readonly filePath: FilePath
  readonly name: string
  readonly node: Node
}

type Imports = readonly Import[]

// eslint-disable-next-line functional/prefer-readonly-type
type ImportSet = Set<Import>

type ResolveImportProps = {
  readonly baseDirectory: BaseDirectory
  readonly name: string
  readonly node: Node
}

type ResolveImport = (props: ResolveImportProps) => Import

export type { Import, Imports, ImportSet, ResolveFilePath, ResolveImport, ResolveIsModule }
