import type { HasPackage } from 'getConfig/resolveOptions/resolveHas/resolveHasPackage'
import type { PackageJson } from 'getConfig/resolveOptions/resolvePackageJson'
import type { ParsedTSConfig } from 'getConfig/resolveOptions/resolvePaths'

type HasNextJS = boolean

type ResolveHasNextJSProps = {
  readonly hasPackage: HasPackage
  readonly packageJson: PackageJson
  readonly parsedTSConfig: ParsedTSConfig
}

type ResolveHasNextJS = (props: ResolveHasNextJSProps) => HasNextJS

type ResolvePackageJsonProps = {
  readonly packageJson: PackageJson
}

type ResolvePackageJson = (props: ResolvePackageJsonProps) => boolean

type ResolveTSConfigDisplayProps = {
  readonly parsedTSConfig: ParsedTSConfig
}

type ResolveTSConfigDisplay = (props: ResolveTSConfigDisplayProps) => boolean

export type { HasNextJS, ResolveHasNextJS, ResolvePackageJson, ResolveTSConfigDisplay }
