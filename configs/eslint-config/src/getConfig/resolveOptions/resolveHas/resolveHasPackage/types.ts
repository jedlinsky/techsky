import type { Dependencies } from 'getConfig'
import type { packages } from './packages'

type CheckPackageProps = {
  readonly dependenciesNames: readonly string[]
  readonly packageName: string
}

type CheckPackage = (props: CheckPackageProps) => boolean

type RemovePackageNameCaretAndDollarProps = {
  readonly endsWithDollar?: boolean
  readonly packageName: string
  readonly startsWithCaret?: boolean
}

type RemovePackageNameCaretAndDollar = (props: RemovePackageNameCaretAndDollarProps) => string

type ResolveDash<TName extends string> = TName extends `${infer TSegment1}-${infer TSegment2}${infer TSegment3}`
  ? `${Lowercase<TSegment1>}${Uppercase<TSegment2>}${ResolveDash<TSegment3>}`
  : Lowercase<TName>

type ReplaceSlashForDash<TName extends string> = TName extends `${infer TSegment1}/${infer TSegment2}${infer TSegment3}`
  ? `${TSegment1}-${TSegment2}${ReplaceSlashForDash<TSegment3>}`
  : TName

type RemoveScope<TString extends string> = TString extends `@${infer TRest}` ? TRest : TString

type RemoveCaretAndDollar<TString extends string> = TString extends `^${infer TMiddle}$`
  ? TMiddle
  : TString extends `^${infer TRest}`
    ? TRest
    : TString extends `${infer TStart}$`
      ? TStart
      : TString

type ResolvePackageNameType<TName extends string> =
  RemoveCaretAndDollar<TName> extends infer TWithoutCaretAndDollar
    ? TWithoutCaretAndDollar extends string
      ? RemoveScope<TWithoutCaretAndDollar> extends infer TWithoutScope
        ? TWithoutScope extends string
          ? ReplaceSlashForDash<TWithoutScope> extends infer TWithDash
            ? TWithDash extends string
              ? ResolveDash<TWithDash>
              : never
            : never
          : never
        : never
      : never
    : never

type HasPackage =
  ResolvePackageNameType<(typeof packages)[number]> extends infer TResolvedNames
    ? {
        readonly [TName in TResolvedNames extends string ? TResolvedNames : never]: boolean
      }
    : never

type ResolveHasPackageProps = {
  readonly dependencies: Dependencies
}

type ResolveHasPackage = (props: ResolveHasPackageProps) => HasPackage

type ResolveNext = (hasPackage: HasPackage) => HasPackage

type ResolvePackageName = (packageName: string) => string

type ResolveReact = (hasPackage: HasPackage) => HasPackage

export type {
  CheckPackage,
  HasPackage,
  RemovePackageNameCaretAndDollar,
  ResolveHasPackage,
  ResolveNext,
  ResolvePackageName,
  ResolveReact
}
