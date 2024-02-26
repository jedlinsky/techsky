import type { ESLintConfigPath, FileContentHashMap } from 'cache/types'

type SetInitialFileContentHashesProps = {
  readonly eslintConfigPath: ESLintConfigPath
  readonly fileContentHashMap: FileContentHashMap
}

type SetInitialFileContentHashes = (props: SetInitialFileContentHashesProps) => void

export type { SetInitialFileContentHashes }
