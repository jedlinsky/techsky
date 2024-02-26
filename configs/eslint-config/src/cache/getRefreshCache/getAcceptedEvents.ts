import { getIsPathInBaseDirectory } from './getIsPathInBaseDirectory'
import type { GetAcceptedEvents } from './types'

const getAcceptedEvents: GetAcceptedEvents = function ({ config, posixPath }) {
  const isPathInBaseDirectory = getIsPathInBaseDirectory({ config, posixPath })

  if (isPathInBaseDirectory) {
    return ['add', 'addDir', 'unlink', 'unlinkDir']
  }

  return ['add', 'change', 'unlink']
}

export { getAcceptedEvents }
