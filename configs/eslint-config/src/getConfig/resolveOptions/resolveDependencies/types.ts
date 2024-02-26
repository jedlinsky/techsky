import type { EnumVersionValue } from '@ts-type/package-dts/package-json'
import type { LiteralUnion } from 'type-fest'
import type { PackageJson } from 'getConfig/resolveOptions/resolvePackageJson'
import type { Paths } from 'getConfig/resolveOptions/resolvePaths'

type DependencyVersion = LiteralUnion<keyof typeof EnumVersionValue | '*' | 'latest' | 'next', string>

type Dependencies = {
  readonly [TPackageName: string]: DependencyVersion
}

type MergeDependencies = (packageJson: Readonly<PackageJson>) => Dependencies

type ResolvedDependencies = {
  readonly dependencies: Dependencies
  readonly rootDependencies: Dependencies
}

type ResolveDependenciesProps = {
  readonly packageJson: PackageJson
  readonly paths: Paths
  readonly rootPackageJson: PackageJson
}

type ResolveDependencies = (props: ResolveDependenciesProps) => ResolvedDependencies

export type { Dependencies, MergeDependencies, ResolveDependencies }
