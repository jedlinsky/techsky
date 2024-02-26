import type { PackageJson } from 'getConfig/resolveOptions/resolvePackageJson'
import type { ParsedTSConfig } from 'getConfig/resolveOptions/resolvePaths'

type Format = 'cjs' | 'esm'

type ResolveFormatProps = {
  readonly packageJson: PackageJson
  readonly parsedTSConfig: ParsedTSConfig
}

type ResolveFormat = (props: ResolveFormatProps) => Format

export type { Format, ResolveFormat }
