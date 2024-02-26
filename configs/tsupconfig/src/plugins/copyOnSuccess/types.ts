import type { Options, Silent } from 'resolveOptions/types.js'

type CopyOnSuccessProps = {
  readonly augmentation: Options['augmentation']
  readonly copy: Options['copy']
  readonly silent: Silent
}

type CopyOnSuccess = (props: CopyOnSuccessProps) => Promise<void>

type ResolvedCopy =
  | readonly (Exclude<Options['copy'], null>[number] & {
      readonly augmentation: boolean
    })[]
  | null

type ResolveCopyProps = {
  readonly augmentation: Options['augmentation']
  readonly copy: Options['copy']
}

type ResolveCopy = (props: ResolveCopyProps) => ResolvedCopy

export type { CopyOnSuccess, ResolveCopy }
