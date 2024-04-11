import type { DistPackageJson } from 'packageJson/types.js'
import type { ResolvedModuleExportsNonUndefinable } from 'plugins/preparePublish/packageJson/types.js'
import type {
  EmptyOutput,
  EmptyOutputs,
  EmptyOutputsValue
} from 'resolveOptions/resolveOnSuccess/deleteEmptyOutputs/types.js'
import type { OutDir } from 'resolveOptions/types.js'

type DeletedDeclarationFiles = EmptyOutput

type GetDeletedDeclarationFilesProps = {
  readonly files: EmptyOutputsValue
  readonly outDir: OutDir
}

type GetDeletedDeclarationFiles = (props: GetDeletedDeclarationFilesProps) => DeletedDeclarationFiles

type ResolvedDistPackageJson = Promise<void>

type ResolveDistPackageJsonProps = {
  readonly emptyOutputs: EmptyOutputs
  readonly outDir: OutDir
}

type ResolveDistPackageJson = (props: ResolveDistPackageJsonProps) => ResolvedDistPackageJson

type ResolveEntriesProps = {
  readonly deletedDeclarationFiles: EmptyOutputsValue
  readonly distPackageJson: DistPackageJson
}

type ResolveEntries = (props: ResolveEntriesProps) => DistPackageJson

type ResolvedEntryPoints = Record<string, string> | ResolvedModuleExportsNonUndefinable

type EntryExports = ResolvedEntryPoints | string

type ExportValue = ResolvedModuleExportsNonUndefinable[string]

type ResolveEntryExportsProps = {
  readonly deletedDeclarationFiles: EmptyOutputsValue
  readonly exports: ResolvedModuleExportsNonUndefinable
}

type ResolveEntryExports = (props: ResolveEntryExportsProps) => EntryExports

type EntryExportsSugar = EntryExports

type ResolveEntryExportsSugarProps = {
  readonly resolvedEntryPoints: ResolvedEntryPoints
}

type ResolveEntryExportsSugar = (props: ResolveEntryExportsSugarProps) => EntryExportsSugar

type EntryTypes = {
  readonly keep: boolean
}

type ResolveEntryTypesProps = {
  readonly deletedDeclarationFiles: EmptyOutputsValue
  readonly value: unknown
}

type ResolveEntryTypes = (props: ResolveEntryTypesProps) => EntryTypes

type WritePackageJsonProps = {
  readonly outDir: OutDir
  readonly resolvedDistPackageJson: DistPackageJson
}

type WritePackageJson = (props: WritePackageJsonProps) => Promise<void>

export type {
  ExportValue,
  GetDeletedDeclarationFiles,
  ResolvedEntryPoints,
  ResolveDistPackageJson,
  ResolveEntries,
  ResolveEntryExports,
  ResolveEntryExportsSugar,
  ResolveEntryTypes,
  WritePackageJson
}
