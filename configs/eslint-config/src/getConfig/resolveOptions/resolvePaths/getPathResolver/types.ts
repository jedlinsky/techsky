import type { A, O } from 'ts-toolbelt'

type _ResolvePathReturnProps<
  TGetPathResolverProps extends GetPathResolverProps,
  TKey extends keyof TGetPathResolverProps,
  TSpecifiedType extends object
> =
  A.At<TGetPathResolverProps, TKey> extends infer TRootRelative
    ? O.OptionalKeys<TGetPathResolverProps> extends infer TOptionalKeys
      ? A.Equals<TOptionalKeys, never> extends 0
        ? 0
        : A.Equals<keyof TGetPathResolverProps, never> extends 1
          ? 0
          : string | undefined extends TRootRelative
            ? O.Optional<TSpecifiedType>
            : A.Equals<TRootRelative, string> extends 1
              ? TSpecifiedType
              : 0
      : never
    : never

type BasePath = {
  readonly absoluteWithBase: string
  readonly relativeWithBase: string
  readonly relativeWithBaseSystem: string
}

type _PathReturnTypeBaseRelative<TGetPathResolverProps extends GetPathResolverProps> = _ResolvePathReturnProps<
  TGetPathResolverProps,
  'baseRelative',
  BasePath
>

type RootPath = {
  readonly relativeWithRoot: string
  readonly relativeWithRootSystem: string
}

type _PathReturnTypeRootRelative<TGetPathResolverProps extends GetPathResolverProps> = _ResolvePathReturnProps<
  TGetPathResolverProps,
  'rootRelative',
  RootPath
>

type BaseRootPath = {
  readonly relativeWithBaseWithRoot: string
  readonly relativeWithBaseWithRootSystem: string
}

type _PathReturnTypeBaseRootRelative<TGetPathResolverProps extends GetPathResolverProps> = _ResolvePathReturnProps<
  TGetPathResolverProps,
  'baseRelative' | 'rootRelative',
  BaseRootPath
>

type CommonPath = {
  readonly absolute: string
  readonly relative: string
  readonly relativeSystem: string
}

type PathReturnType<TGetPathResolverProps extends GetPathResolverProps> = (
  _PathReturnTypeBaseRelative<TGetPathResolverProps> extends infer TBaseRelative
    ? _PathReturnTypeRootRelative<TGetPathResolverProps> extends infer TRootRelative
      ? TBaseRelative extends 0
        ? TRootRelative extends 0
          ? CommonPath
          : CommonPath & TRootRelative
        : TRootRelative extends 0
          ? CommonPath & TBaseRelative
          : _PathReturnTypeBaseRootRelative<TGetPathResolverProps> & CommonPath & TBaseRelative & TRootRelative
      : never
    : never
) extends infer TResult
  ? TResult extends object
    ? A.Compute<TResult>
    : never
  : never

type GetPathResolverReturn<TGetPathResolverProps extends GetPathResolverProps> = (
  path: string
) => PathReturnType<TGetPathResolverProps>

type GetPathResolverProps = {
  readonly baseRelative?: string | undefined
  readonly currentDirectoryNotation?: boolean
  readonly cwd: string
  readonly rootRelative?: string | undefined
}

type ResolvePathFunction<TPath extends Path> = (path: string) => TPath

type ResolvePath = {
  readonly common: ResolvePathFunction<Path<'common'>>
  readonly withBaseAndRoot: ResolvePathFunction<Path<'withBase' | 'withRoot'>>
  readonly withRoot: ResolvePathFunction<Path<'withRoot'>>
}

type GetResolvePathProps = {
  readonly baseRelative: string
  readonly cwd: string
  readonly rootRelative: string
}

type GetResolvePath = (props: GetResolvePathProps) => ResolvePath

type ResolveAbsoluteProps = {
  readonly cwd: string
  readonly relative: string
  readonly rootRelative: string | undefined
}

type ResolveAbsolute = (props: ResolveAbsoluteProps) => string

type ResolveAbsoluteWithBaseProps = {
  readonly baseRelative: string | undefined
  readonly cwd: string
  readonly relative: string
  readonly relativeEqualsBase: boolean
  readonly rootRelative: string | undefined
}

type ResolveAbsoluteWithBase = (props: ResolveAbsoluteWithBaseProps) => string | null

type ResolveBaseProps = {
  readonly baseRelative: string | undefined
  readonly currentDirectoryNotation: boolean
  readonly relative: string
  readonly relativeEqualsBase: boolean
}

type ResolveBase = (props: ResolveBaseProps) => string | null

type ResolveBaseRootProps = {
  readonly baseRelative: string | undefined
  readonly currentDirectoryNotation: boolean
  readonly relative: string
  readonly relativeEqualsBase: boolean
  readonly rootRelative: string | undefined
}

type ResolveBaseRoot = (props: ResolveBaseRootProps) => string | null

type ResolveCurrentDirectoryNotationProps = { readonly currentDirectoryNotation: boolean; readonly path: string }

type ResolveCurrentDirectoryNotation = (props: ResolveCurrentDirectoryNotationProps) => string

type Modifier = 'common' | 'generic' | 'withBase' | 'withRoot'

type _PathResolveOptional<TWith extends object, TIsWithOptional extends boolean> = true extends TIsWithOptional
  ? O.Optional<TWith> extends infer TOptional
    ? TOptional extends object
      ? TOptional
      : never
    : never
  : TWith

type _PathResolveIsWithOptional<
  TModifier extends Modifier = 'generic',
  TIsWithOptional extends boolean = false
> = TModifier extends 'generic' ? true : false | true extends TIsWithOptional ? true : TIsWithOptional

type Path<TModifier extends Modifier = 'generic', TIsWithOptional extends boolean = false> = 'common' extends TModifier
  ? CommonPath
  : _PathResolveIsWithOptional<TModifier, TIsWithOptional> extends infer TResolvedIsWithOptional
    ? TResolvedIsWithOptional extends boolean
      ? _PathResolveOptional<BasePath, TResolvedIsWithOptional> extends infer TResolvedBasePath
        ? TResolvedBasePath extends object
          ? _PathResolveOptional<RootPath, TResolvedIsWithOptional> extends infer TResolvedRootPath
            ? TResolvedRootPath extends object
              ? _PathResolveOptional<BaseRootPath, TResolvedIsWithOptional> extends infer TResolvedBaseRootPath
                ? TResolvedBaseRootPath extends object
                  ? 'generic' extends TModifier
                    ? A.Compute<CommonPath & TResolvedBasePath & TResolvedBaseRootPath & TResolvedRootPath>
                    : 'withBase' | 'withRoot' extends TModifier
                      ? A.Compute<CommonPath & TResolvedBasePath & TResolvedBaseRootPath & TResolvedRootPath>
                      : 'withBase' extends TModifier
                        ? A.Compute<CommonPath & TResolvedBasePath>
                        : A.Compute<CommonPath & TResolvedRootPath>
                  : never
                : never
              : never
            : never
          : never
        : never
      : never
    : never

// type t0 = Path

// type t1 = Path<'generic', true>

// type t2 = Path<'withBase', true>

// type t3 = Path<'withBase'>

// type t4 = Path<'withRoot', true>

// type t5 = Path<'withRoot'>

// type t6 = Path<'withBase' | 'withRoot', true>

// type t7 = Path<'withBase' | 'withRoot'>

// type t8 = Path<'generic', boolean>

// type t9 = Path<'withBase', boolean>

// type t10 = Path<'withRoot', boolean>

// type t11 = Path<'withBase' | 'withRoot', boolean>

// type t12 = Path<'common'>

// type t13 = Path<'common', true>

// type t14 = Path<'common', boolean>

type ResolvePathInternalOptions = {
  readonly baseRelative: string | undefined
  readonly currentDirectoryNotation: boolean
  readonly cwd: string
  readonly rootRelative: string | undefined
}

type ResolvePathInternal = <TResolvePathInternalOptions extends ResolvePathInternalOptions>(
  path: string,
  options: TResolvePathInternalOptions
) => Path

type _PathToPaths<TPath extends Path, TAdditionalProperties extends object = never> =
  O.Update<TPath, string, readonly string[]> extends infer TUpdated
    ? TUpdated extends object
      ? readonly [TAdditionalProperties] extends readonly [never]
        ? TUpdated
        : O.Merge<TUpdated, TAdditionalProperties>
      : never
    : never

type ResolvedPaths<TResolvePathsProps extends ResolvePathsProps> =
  PathReturnType<TResolvePathsProps> extends infer TPath ? (TPath extends Path ? _PathToPaths<TPath> : never) : never

type Paths<
  TModifier extends Modifier = 'generic',
  TIsWithOptional extends boolean = false,
  TAdditionalProperties extends object = never
> =
  Path<TModifier, TIsWithOptional> extends infer TPath
    ? TPath extends Path
      ? _PathToPaths<TPath, TAdditionalProperties>
      : never
    : never

type ResolvePathsProps = A.Compute<
  GetPathResolverProps & {
    readonly paths: readonly string[]
  }
>

type ResolveRootProps = {
  readonly currentDirectoryNotation: boolean
  readonly relative: string
  readonly rootRelative: string | undefined
}

type ResolveRoot = (props: ResolveRootProps) => string | null

type ResolveSystemProps = {
  readonly relative: string
}

type ResolveSystem = (props: ResolveSystemProps) => string

export type {
  CommonPath,
  GetPathResolverProps,
  GetPathResolverReturn,
  GetResolvePath,
  Path,
  PathReturnType,
  Paths,
  ResolveAbsolute,
  ResolveAbsoluteWithBase,
  ResolveBase,
  ResolveBaseRoot,
  ResolveCurrentDirectoryNotation,
  ResolvedPaths,
  ResolvePath,
  ResolvePathInternal,
  ResolvePathsProps,
  ResolveRoot,
  ResolveSystem
}
