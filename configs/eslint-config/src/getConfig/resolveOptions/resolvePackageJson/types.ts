import type { IPackageJson as PackageJson } from '@ts-type/package-dts'
import type { Paths } from 'getConfig/resolveOptions/resolvePaths'

type GetPackageJsonProps = {
  readonly directoryPath: string
}

type GetPackageJson = (props: GetPackageJsonProps) => PackageJson

type ResolvePackageJsonProps = {
  readonly paths: Paths
  readonly rootPackageJson: PackageJson
}

type ResolvePackageJson = (props: ResolvePackageJsonProps) => PackageJson

type ResolveRootPackageJsonProps = {
  readonly cwd: string
}

type ResolveRootPackageJson = (props: ResolveRootPackageJsonProps) => PackageJson

export type { GetPackageJson, PackageJson, ResolvePackageJson, ResolveRootPackageJson }
