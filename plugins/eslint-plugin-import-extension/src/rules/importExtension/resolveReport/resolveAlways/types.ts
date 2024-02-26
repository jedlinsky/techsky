import type { Import } from 'rules/importExtension/listenImports/resolveImport/types.js'
import type { PropsFromContextNonNullable } from 'rules/importExtension/resolveReport/types.js'
import type { Context } from 'rules/importExtension/types.js'
import type { FixerValueNonNullable } from './resolveFixerValue/types.js'
import type { CompilerOptions, Diagnostic, Program } from 'typescript'

type GetDiagnosticProps = {
  readonly name: string
  readonly path: string
  readonly program: Program
}

type GetDiagnostic = (props: GetDiagnosticProps) => Diagnostic | null

type FileContent = string | null

type GetFileContentProps = {
  readonly path: string
}

type GetFileContent = (props: GetFileContentProps) => FileContent

type ReportAlwaysProps = {
  readonly context: Context
  readonly fixerValue: FixerValueNonNullable
  readonly node: Import['node']
}

type ReportAlways = (props: ReportAlwaysProps) => void

type ResolveAlwaysProps = Import & {
  readonly context: Context
  readonly propsFromContext: PropsFromContextNonNullable
}

type ResolveAlways = (props: ResolveAlwaysProps) => void

type ResolvedFilePath = string | null

type ResolveFilePathProps = {
  readonly compilerOptions: CompilerOptions
  readonly filePath: string | null
  readonly name: string
  readonly path: string
}

type ResolveFilePath = (props: ResolveFilePathProps) => ResolvedFilePath

type Suffix = string | null

type ResolveSuffixProps = {
  readonly name: string
  readonly resolvedFilePath: string
}

type ResolveSuffix = (props: ResolveSuffixProps) => Suffix

export type { GetDiagnostic, GetFileContent, ReportAlways, ResolveAlways, ResolveFilePath, ResolveSuffix, Suffix }
