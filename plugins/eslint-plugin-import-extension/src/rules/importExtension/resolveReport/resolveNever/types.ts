import type { Import } from 'rules/importExtension/listenImports/resolveImport/types.js'
import type { Context } from 'rules/importExtension/types.js'
import type { FixerValue } from './resolveFixerValue/types.js'

type ReportNeverProps = {
  readonly context: Context
  readonly fixerValue: FixerValue
  readonly node: Import['node']
}

type ReportNever = (props: ReportNeverProps) => void

type ResolveNeverProps = Omit<Import, 'filePath'> & {
  readonly context: Context
}

type ResolveNever = (props: ResolveNeverProps) => void

export type { ReportNever, ResolveNever }
