import { getResolvedExisting } from './getResolvedExisting.js'
import { getResolvedFilePathExtension } from './getResolvedFilePathExtension.js'
import { resolveAppend } from './resolveAppend.js'
import { resolveExisting } from './resolveExisting.js'
import { resolveFilePathExtension } from './resolveFilePathExtension.js'
import { resolveMessage } from './resolveMessage.js'
import type { ResolveFixerValue } from './types.js'

const resolveFixerValue: ResolveFixerValue = function ({ mapTSToJS, resolvedFilePath, suffix }) {
  const existing = resolveExisting({ resolvedFilePath })

  if (existing.length === 0) {
    return null
  }

  const resolvedExisting = getResolvedExisting({ existing, mapTSToJS })

  const filePathExtension = resolveFilePathExtension({ existing })
  const resolvedFilePathExtension = getResolvedFilePathExtension({ filePathExtension, mapTSToJS })

  const message = resolveMessage({ resolvedExisting, suffix })

  const append = resolveAppend({ resolvedFilePathExtension, suffix })

  const hasSuffix = suffix !== null

  return {
    append,
    hasSuffix,
    message
  }
}

export { resolveFixerValue }
