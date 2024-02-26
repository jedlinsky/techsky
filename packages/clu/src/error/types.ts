import type { O } from 'ts-toolbelt'
import type { RequireExactlyOne } from 'type-fest'

type CLUErrorPropsName<TName extends string> = {
  readonly name: TName
}

type CLUErrorPropsNameGeneric = {
  readonly name?: string
}

type _ResolveObjectWithName<TName extends string> = TName extends string
  ? string extends TName
    ? CLUErrorPropsName<TName>
    : 1
  : CLUErrorPropsNameGeneric

type CLUErrorProps<TName extends string = string> = _ResolveObjectWithName<TName> &
  ErrorJunction & { readonly message: string }

type FormatErrorValuesProps = {
  readonly conjunction: readonly string[] | undefined
  readonly disjunction: readonly string[] | undefined
}

type FormatErrorValues = (props: FormatErrorValuesProps) => string | undefined

type OrderValues = (values: readonly string[]) => readonly string[]

type ErrorJunctionUndefinable = {
  readonly conjunction?: readonly string[] | undefined
  readonly disjunction?: readonly string[] | undefined
}

type ErrorJunction = O.Readonly<
  | RequireExactlyOne<ErrorJunctionUndefinable, 'conjunction' | 'disjunction'>
  | {
      readonly conjunction?: never
      readonly disjunction?: never
    }
>

export type { CLUErrorProps, ErrorJunction, ErrorJunctionUndefinable, FormatErrorValues, OrderValues }
