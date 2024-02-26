import type { OutDir, Silent } from 'resolveOptions/types.js'

type DeleteOutputProps = {
  readonly outDir: OutDir
  readonly silent: Silent
}

type DeleteOutput = (props: DeleteOutputProps) => Promise<void>

export type { DeleteOutput }
