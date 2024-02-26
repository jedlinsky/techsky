import type { Options, Silent } from 'resolveOptions/types.js'

type ResolveNullEntryProps = Omit<Options, 'entry'> & {
  readonly entry: null
  readonly silent: Silent
}

type ResolveNullEntry = (props: ResolveNullEntryProps) => Promise<void>

export type { ResolveNullEntry }
