import { join } from 'node:path/posix'
import type { JoinSegments } from './types'

const joinSegments: JoinSegments = function ({ extension, fileName, resolvedResolverProps }) {
  const joinedSegments = resolvedResolverProps.segments
    ? join(...resolvedResolverProps.segments, ...(fileName ? [fileName] : []))
    : ''

  return `${joinedSegments}${extension ? `.${extension}` : ''}`
}

export { joinSegments }
