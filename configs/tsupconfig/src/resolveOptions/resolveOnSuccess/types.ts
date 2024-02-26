import type { Copy } from 'resolveOptions/resolveCopy/types.js'
import type { MainEntryNonNullable } from 'resolveOptions/resolveMainEntry/types.js'
import type {
  Augmentation,
  Bundle,
  DeleteEmptyEmittedFiles,
  ExecuteOnWatch,
  IncludeDistPackageJson,
  OutDir,
  Silent,
  Watch
} from 'resolveOptions/types.js'
import type { DTSTimeout, TSUpOptions } from 'types.js'

type OnSuccess = () => ReturnType<Exclude<TSUpOptions['onSuccess'], string>>

type ResolveOnSuccessProps = {
  readonly augmentation: Augmentation
  readonly bundle: Bundle
  readonly copy: Copy
  readonly deleteEmptyEmittedFiles: DeleteEmptyEmittedFiles
  readonly dts: TSUpOptions['dts']
  readonly dtsTimeout: DTSTimeout
  readonly executeOnWatch: ExecuteOnWatch
  readonly includeDistPackageJson: IncludeDistPackageJson
  readonly mainEntry: MainEntryNonNullable
  readonly onSuccess: TSUpOptions['onSuccess'] | undefined
  readonly outDir: OutDir
  readonly silent: Silent
  readonly watch: Watch
}

type ResolveOnSuccess = (props: ResolveOnSuccessProps) => OnSuccess

export type { OnSuccess, ResolveOnSuccess }
