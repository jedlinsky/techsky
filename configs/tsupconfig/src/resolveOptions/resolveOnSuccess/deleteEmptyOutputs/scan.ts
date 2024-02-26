import dree from 'dree'
import { scanDirectoryCallback } from './scanDirectoryCallback.js'
import { scanFileCallback } from './scanFileCallback.js'
import type { Scan } from './types.js'

const scan: Scan = async function ({ emptyOutputsMap, outDir, silent, type = 'both' }) {
  const scanFiles = type === 'both' || type === 'files'
  const scanDirectories = type === 'both' || type === 'directories'

  // eslint-disable-next-line functional/no-expression-statements
  await dree.scanAsync(
    outDir,
    {
      extensions: ['cjs', 'js', 'ts'],
      hash: false,
      showHidden: false,
      size: false,
      symbolicLinks: false
    },
    scanFiles ? scanFileCallback({ emptyOutputsMap, outDir, silent }) : undefined,
    scanDirectories ? scanDirectoryCallback({ emptyOutputsMap, outDir, silent }) : undefined
  )
}

export { scan }
