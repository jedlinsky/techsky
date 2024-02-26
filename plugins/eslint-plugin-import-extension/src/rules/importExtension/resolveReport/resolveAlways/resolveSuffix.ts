import { normalize } from 'node:path/posix'
import type { ResolveSuffix } from './types.js'

const resolveSuffix: ResolveSuffix = function ({ name, resolvedFilePath }) {
  const lastPathSegment = resolvedFilePath.split(normalize(name)).at(-1)

  if (lastPathSegment === undefined) {
    return null
  }

  if (!lastPathSegment.startsWith('/')) {
    return null
  }

  return lastPathSegment.slice(1).split('.').at(0) ?? null
}

export { resolveSuffix }
