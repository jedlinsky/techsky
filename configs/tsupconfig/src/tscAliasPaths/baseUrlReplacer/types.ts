import type { AliasReplacerArguments } from 'tsc-alias'

type BaseUrlReplacerProps = AliasReplacerArguments

type BaseUrlReplacer = (props: Readonly<BaseUrlReplacerProps>) => string

type Dependencies = readonly string[]

type GetDependencies = () => Dependencies

type ResolveImportPathProps = AliasReplacerArguments & {
  readonly requiredModule: string
}

type ResolveImportPath = (props: Readonly<ResolveImportPathProps>) => string

type ResolveImportRelativePathProps = Readonly<Pick<AliasReplacerArguments, 'config' | 'file'>>

type ResolveImportRelativePath = (props: ResolveImportRelativePathProps) => string

type PathFromImport = string | undefined

type ResolvePathFromImport = (value: string) => PathFromImport

export type { BaseUrlReplacer, GetDependencies, ResolveImportPath, ResolveImportRelativePath, ResolvePathFromImport }
