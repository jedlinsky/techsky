import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import type { ResolveEntryPath } from './types.js'

const resolveEntryPath: ResolveEntryPath = function ({ path, srcDir }) {
  const withoutCurrentDirectoryAnnotation = path.startsWith('/')
    ? path.replace('/', '')
    : path.startsWith('./')
      ? path.replace('./', '')
      : path

  const firstSegment = withoutCurrentDirectoryAnnotation.split('/').at(0)

  const pathInSrcDirectory =
    firstSegment === srcDir ? withoutCurrentDirectoryAnnotation : `${srcDir}/${withoutCurrentDirectoryAnnotation}`

  const resolvedEntryPath = `./${pathInSrcDirectory}`

  const fileExists = existsSync(resolve(resolvedEntryPath))

  if (!fileExists) {
    throw new Error(`Extra entry ${resolvedEntryPath} does not exist`)
  }

  return resolvedEntryPath
}

export { resolveEntryPath }
