import { relative } from 'node:path'
import { deleteAsync } from 'del'
import { logger } from 'logger/index.js'
import { checkPath } from './checkPath.js'
import type { ScanDirectoryCallback } from './types.js'

const scanDirectoryCallback: ScanDirectoryCallback = function ({ emptyOutputsMap, outDir, silent }) {
  return async function ({ path, sizeInBytes = 0 }) {
    if (sizeInBytes !== 0) {
      return
    }

    checkPath({ outDir, path })

    const paths = await deleteAsync(path)

    if (paths.length === 0) {
      return
    }

    emptyOutputsMap.set('directories', [...(emptyOutputsMap.get('directories') ?? []), ...paths])

    paths.forEach((path) =>
      logger({
        silent,
        text: relative(process.cwd(), path),
        type: 'del'
      })
    )
  }
}

export { scanDirectoryCallback }
