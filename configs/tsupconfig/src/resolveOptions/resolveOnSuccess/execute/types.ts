import type { MainEntry } from 'resolveOptions/resolveMainEntry/types.js'
import type { ExecuteOnWatch, OutDir, Watch } from 'resolveOptions/types.js'
import type { TSUpOptions } from 'types.js'

type ExecuteProps = {
  readonly executeOnWatch: ExecuteOnWatch
  readonly mainEntry: MainEntry
  readonly onSuccess: TSUpOptions['onSuccess'] | undefined
  readonly outDir: OutDir
  readonly watch: Watch
}

type Execute = (props: ExecuteProps) => ReturnType<Exclude<TSUpOptions['onSuccess'], string>>

type ExecuteCommand = (command: string) => Promise<void>

export type { Execute, ExecuteCommand }
