import { resolveFileType } from 'cache/resolveFileType'
import type { GetIsTurboEventIgnored } from './types'

const getIsTurboEventIgnored: GetIsTurboEventIgnored = function ({ eventName, path }) {
  const fileType = resolveFileType({ path })

  if (fileType !== 'turbo') {
    return false
  }

  if (eventName === 'add' || eventName === 'unlink') {
    return false
  }

  return true
}

export { getIsTurboEventIgnored }
