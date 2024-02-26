import { join } from 'node:path/posix'
import type { ResolveUserEntry } from './types.js'

const resolveUserEntry: ResolveUserEntry = function ({ srcDir, userEntry }) {
  if (!userEntry) {
    return
  }

  if (userEntry instanceof Array && userEntry.length !== 0) {
    if (userEntry.length === 1) {
      return userEntry.at(0) as string
    }

    const entriesWithIndex = userEntry.filter((entry) => entry.includes('index.ts'))

    if (entriesWithIndex.length !== 0) {
      const shortestEntryWithIndex = [...entriesWithIndex]
        .sort((entryA, entryB) => entryA.length - entryB.length)
        .at(0) as string

      return shortestEntryWithIndex
    }
  }

  const userEntryEntries = Object.entries(userEntry)

  if (!(userEntry instanceof Array) && userEntryEntries.length !== 0) {
    if (userEntryEntries.length === 1) {
      return join(srcDir, `${userEntryEntries.at(0)?.at(0) as string}.ts`)
    }

    const entriesWithIndex = userEntryEntries.filter(([_key, value]) => value.includes('index.ts'))

    if (entriesWithIndex.length !== 0) {
      const shortestEntryWithIndex = [...entriesWithIndex]
        .sort(([_entryAKey, entryAValue], [_entryBKey, entryBValue]) => entryAValue.length - entryBValue.length)
        .at(0)
        ?.at(0) as string

      return join(srcDir, `${shortestEntryWithIndex}.ts`)
    }
  }
}

export { resolveUserEntry }
