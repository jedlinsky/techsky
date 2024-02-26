import type { TSESLint, TSESTree } from '@typescript-eslint/utils'
import type { Context } from 'rules/importExtension/types.js'
import type { Listener } from 'rules/types.js'
import type { Imports, ImportSet } from './resolveImport/types.js'

type IsModuleBuiltIn = boolean

type GetIsModuleBuiltIn = (moduleName: string) => IsModuleBuiltIn

type Callback = (imports: Imports) => void

type ListenImports = (context: Readonly<Context>, callback: Callback) => Listener

type ImportExportRuleFunctionProps = {
  readonly baseDirectory: BaseDirectory
  readonly importSet: ImportSet
}

type ImportExportRuleFunction = (
  props: ImportExportRuleFunctionProps
) => TSESLint.RuleFunction<
  | TSESTree.ExportAllDeclaration
  | TSESTree.ExportNamedDeclaration
  | TSESTree.ImportDeclaration
  | TSESTree.ImportExpression
>

type ProgramExitRuleFunctionProps = {
  readonly callback: Callback
  readonly importSet: ImportSet
}

type ProgramExitRuleFunction = (props: ProgramExitRuleFunctionProps) => TSESLint.RuleFunction<TSESTree.Program>

type BaseDirectory = string

type ResolveBaseDirectoryProps = {
  readonly context: Context
}

type ResolveBaseDirectory = (props: ResolveBaseDirectoryProps) => BaseDirectory

export type {
  BaseDirectory,
  GetIsModuleBuiltIn,
  ImportExportRuleFunction,
  ListenImports,
  ProgramExitRuleFunction,
  ResolveBaseDirectory
}
