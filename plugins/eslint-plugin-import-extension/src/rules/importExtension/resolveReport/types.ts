import type { Import } from 'rules/importExtension/listenImports/resolveImport/types.js'
import type { Context, MapTSToJS, Required } from 'rules/importExtension/types.js'
import type { CompilerOptions, Program } from 'typescript'

type PropsFromContextNonNullable = {
  readonly compilerOptions: CompilerOptions
  readonly mapTSToJS: MapTSToJS
  readonly path: string
  readonly program: Program
  readonly required: Required
}

type PropsFromContext = PropsFromContextNonNullable | null

type ResolvePropsFromContextProps = {
  readonly context: Context
}

type ResolvePropsFromContext = (props: ResolvePropsFromContextProps) => PropsFromContext

type Report = (resolvedImport: Import) => void

type ResolveReportProps = {
  readonly context: Context
}

type ResolveReport = (props: ResolveReportProps) => Report

export type { PropsFromContextNonNullable, ResolvePropsFromContext, ResolveReport }
