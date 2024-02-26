import type { Dependencies, Paths, UserOptions } from 'getConfig'
import type { HasPackage } from './resolveHasPackage'

type Has = {
  readonly option: HasOption
  readonly package: HasPackage
  readonly rule: HasRule
  readonly typescript: boolean
}

type ResolveHasProps = {
  readonly dependencies: Dependencies
  readonly paths: Paths
  readonly userOptions: UserOptions
}

type ResolveHas = (props: ResolveHasProps) => Has

type HasOption = {
  readonly [TKey in keyof UserOptions]-?: boolean
}

type ResolveHasOption = (userOptions: UserOptions) => HasOption

type HasRule = {
  readonly [TKey in keyof Exclude<UserOptions['rules'], undefined>]-?: boolean
}

type ResolveHasRule = (userOptions: UserOptions) => HasRule

type ResolveHasTypescriptProps = {
  readonly paths: Paths
}

type ResolveHasTypescript = (props: ResolveHasTypescriptProps) => boolean

export type { Has, ResolveHas, ResolveHasOption, ResolveHasRule, ResolveHasTypescript }
