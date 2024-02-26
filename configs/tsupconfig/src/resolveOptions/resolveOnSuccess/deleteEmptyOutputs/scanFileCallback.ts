import { relative } from 'node:path'
import { deleteAsync } from 'del'
import { logger } from 'logger/index.js'
import { checkPath } from './checkPath.js'
import type { ScanFileCallback } from './types.js'

const scanFileCallback: ScanFileCallback = function ({ emptyOutputsMap, outDir, silent }) {
  return async function ({ path, sizeInBytes = 0 }) {
    if (sizeInBytes > 1) {
      return
    }

    checkPath({ outDir, path })

    const paths = await deleteAsync(path)

    if (paths.length === 0) {
      return
    }

    emptyOutputsMap.set('files', [...(emptyOutputsMap.get('files') ?? []), ...paths])

    paths.forEach((path) =>
      logger({
        silent,
        text: relative(process.cwd(), path),
        type: 'del'
      })
    )
  }
}

export { scanFileCallback }
