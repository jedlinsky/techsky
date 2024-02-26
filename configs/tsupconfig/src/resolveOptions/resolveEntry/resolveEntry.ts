import { resolveEntryExclude } from './resolveEntryExclude.js'
import type { ResolveEntry } from './types.js'

const resolveEntry: ResolveEntry = function ({
  augmentation,
  bundle,
  entry,
  excludeEntry,
  excludeEntryDTS,
  extraEntry,
  mainEntryNotOutput,
  srcDir
}) {
  if (entry === null || mainEntryNotOutput === null) {
    return null
  }

  if (!bundle) {
    const entryExclude = resolveEntryExclude({ augmentation, excludeEntry, excludeEntryDTS, extraEntry, srcDir })

    return [`${srcDir}/**/*.ts?(x)`, ...(entryExclude ?? [])]
  }

  if (entry) {
    return entry
  }

  return [mainEntryNotOutput]
}

export { resolveEntry }
