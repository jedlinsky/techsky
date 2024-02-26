import { resolveHasSuffix } from './resolveHasSuffix.js'
import { resolveMessage } from './resolveMessage.js'
import { resolveRange } from './resolveRange.js'
import { resolveRemove } from './resolveRemove.js'
import { resolveSuffix } from './resolveSuffix.js'
import type { ResolveFixerValue } from './types.js'

const resolveFixerValue: ResolveFixerValue = function ({ name, nameExtension, node }) {
  const suffix = resolveSuffix({ nameExtension })
  const hasSuffix = resolveHasSuffix({ name, suffix })

  const remove = resolveRemove({ hasSuffix, nameExtension })

  const message = resolveMessage({ remove })

  const range = resolveRange({ name, node, remove })

  return {
    hasSuffix,
    message,
    range
  }
}

export { resolveFixerValue }
