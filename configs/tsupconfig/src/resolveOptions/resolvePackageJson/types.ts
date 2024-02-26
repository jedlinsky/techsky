import type { Simplify } from 'type-fest/source/simplify.js'
import type { PackageJson as DefaultPackageJson, PackageJsonWithoutExports } from 'packageJson/types.js'

type IsPackageExportsValidProps = {
  readonly packageJson: DefaultPackageJson
}

type IsPackageExportsValid = (props: IsPackageExportsValidProps) => boolean

type Exports = string | { readonly [key: string]: string }

type PackageJsonExports = {
  readonly exports?: Exports
}

type PackageJson = Simplify<PackageJsonExports & PackageJsonWithoutExports>

type ResolvePackageJson = () => PackageJson

export type { Exports, IsPackageExportsValid, PackageJson, ResolvePackageJson }
