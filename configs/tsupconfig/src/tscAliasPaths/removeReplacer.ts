import { deleteAsync } from 'del'
import { logger } from 'logger/index.js'
import type { RemoveReplacer } from './types.js'

const removeReplacer: RemoveReplacer = async function ({ baseUrlReplacerPaths, bundledBaseUrlReplacerPath, silent }) {
  if (baseUrlReplacerPaths.sourcePath) {
    // eslint-disable-next-line functional/no-expression-statements
    await deleteAsync(bundledBaseUrlReplacerPath)

    logger({
      silent,
      text: `Removed replacer "${bundledBaseUrlReplacerPath}"`,
      type: 'tsa-info'
    })
  }
}

export { removeReplacer }
