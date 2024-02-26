import type { DeleteEmptyEmittedFiles, OutDir, Silent } from 'resolveOptions/types.js'

type CheckPathProps = {
  readonly outDir: OutDir
  readonly path: string
}

type CheckPath = (props: CheckPathProps) => void

type EmptyOutputsValue = readonly string[]

type EmptyOutputsKeys = 'directories' | 'files'

// eslint-disable-next-line functional/prefer-readonly-type
type EmptyOutputsMap = Map<EmptyOutputsKeys, EmptyOutputsValue>

type EmptyOutput = EmptyOutputsValue | null

type EmptyOutputsNonNullable = Readonly<Record<EmptyOutputsKeys, EmptyOutputsValue>>

type EmptyOutputs = Readonly<Record<EmptyOutputsKeys, EmptyOutput>>

type DeleteEmptyOutputsProps = {
  readonly deleteEmptyEmittedFiles: DeleteEmptyEmittedFiles
  readonly outDir: OutDir
  readonly silent: Silent
}

type DeleteEmptyOutputs = (props: DeleteEmptyOutputsProps) => Promise<EmptyOutputs>

type IsPathInsideOutDirProps = {
  readonly outDir: OutDir
  readonly path: string
}

type IsPathInsideOutDir = (props: IsPathInsideOutDirProps) => boolean

type ScanType = 'both' | 'directories' | 'files'

type ScanProps = {
  readonly emptyOutputsMap: EmptyOutputsMap
  readonly outDir: OutDir
  readonly silent: Silent
  readonly type?: ScanType
}

type Scan = (props: ScanProps) => Promise<void>

type ScanCallbackDreeProps = {
  readonly path: string
  readonly sizeInBytes?: number
}

type ScanCallbackProps = {
  readonly emptyOutputsMap: EmptyOutputsMap
  readonly outDir: OutDir
  readonly silent: Silent
}

type ScanCallback = (props: ScanCallbackProps) => (dreeProps: ScanCallbackDreeProps) => Promise<void>

type ScanDirectoryCallback = ScanCallback

type ScanFileCallback = ScanCallback

export type {
  CheckPath,
  DeleteEmptyOutputs,
  EmptyOutput,
  EmptyOutputs,
  EmptyOutputsKeys,
  EmptyOutputsMap,
  EmptyOutputsNonNullable,
  EmptyOutputsValue,
  IsPathInsideOutDir,
  Scan,
  ScanDirectoryCallback,
  ScanFileCallback
}
