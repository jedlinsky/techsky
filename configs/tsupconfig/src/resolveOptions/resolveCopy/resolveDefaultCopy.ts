import { existsSync } from 'node:fs'
import { resolve } from 'node:path/posix'
import { resolvePath } from './resolvePath.js'
import type { DefaultCopyItem, ResolveDefaultCopy } from './types.js'

const DEFAULT_COPY = ['CHANGELOG.md', 'LICENSE', 'README.md']

const resolveDefaultCopy: ResolveDefaultCopy = function ({ outDir }) {
  const copy = DEFAULT_COPY.map((path) => {
    const from = resolvePath({ path })

    if (!existsSync(resolve(from))) {
      return null
    }

    return {
      from,
      to: resolvePath({ path: outDir })
    }
  }).filter((item): item is DefaultCopyItem => item !== null)

  if (copy.length === 0) {
    return null
  }

  return copy
}

export { resolveDefaultCopy }
