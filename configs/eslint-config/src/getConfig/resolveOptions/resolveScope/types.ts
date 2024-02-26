import type { PackageJson } from 'getConfig'

type Scope = string | null

type ResolveScopeProps = {
  readonly npmScope: string | undefined
  readonly packageJson: PackageJson
}

type ResolveScope = (props: ResolveScopeProps) => Scope

export type { ResolveScope, Scope }
