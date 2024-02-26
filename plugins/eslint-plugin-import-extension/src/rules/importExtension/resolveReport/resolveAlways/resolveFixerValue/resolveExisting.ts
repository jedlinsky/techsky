import { readdirSync } from 'node:fs'
import { basename, dirname, extname } from 'node:path'
import type { ResolveExisting } from './types.js'

const resolveExisting: ResolveExisting = function ({ resolvedFilePath }) {
  const filePathBase = basename(resolvedFilePath, extname(resolvedFilePath))

  try {
    const directoryEntries = readdirSync(dirname(resolvedFilePath))

    const existing = directoryEntries.reduce<readonly string[]>((accumulator, entry) => {
      const entryBase = basename(entry, extname(entry))

      if (entryBase !== filePathBase) {
        return accumulator
      }

      const extension = extname(entry)

      return [...accumulator, extension]
    }, [])

    return Array.from(new Set(existing))
  } catch {
    return []
  }
}

export { resolveExisting }
