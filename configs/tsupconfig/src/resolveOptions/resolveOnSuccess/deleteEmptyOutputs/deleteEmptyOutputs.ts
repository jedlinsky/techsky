import { scan } from './scan.js'
import type { DeleteEmptyOutputs, EmptyOutputsKeys, EmptyOutputsNonNullable, EmptyOutputsValue } from './types.js'

const deleteEmptyOutputs: DeleteEmptyOutputs = async function ({ deleteEmptyEmittedFiles, outDir, silent }) {
  if (!deleteEmptyEmittedFiles) {
    return {
      directories: null,
      files: null
    }
  }

  const emptyOutputsMap = new Map<EmptyOutputsKeys, EmptyOutputsValue>([
    ['directories', []],
    ['files', []]
  ])

  // eslint-disable-next-line functional/no-expression-statements
  await scan({ emptyOutputsMap, outDir, silent, type: 'files' })

  // eslint-disable-next-line functional/no-expression-statements
  await scan({ emptyOutputsMap, outDir, silent, type: 'directories' })

  const { directories, files } = Object.fromEntries(emptyOutputsMap) as EmptyOutputsNonNullable

  return {
    directories: directories.length === 0 ? null : directories,
    files: files.length === 0 ? null : files
  }
}

export { deleteEmptyOutputs }
