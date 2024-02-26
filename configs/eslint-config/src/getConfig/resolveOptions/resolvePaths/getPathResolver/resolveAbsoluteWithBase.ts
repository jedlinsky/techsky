import { resolve } from 'node:path'
import type { ResolveAbsoluteWithBase } from './types'

const resolveAbsoluteWithBase: ResolveAbsoluteWithBase = function ({
  baseRelative,
  cwd,
  relative,
  relativeEqualsBase,
  rootRelative
}) {
  if (!baseRelative) {
    return null
  }

  if (rootRelative) {
    return relativeEqualsBase
      ? resolve(cwd, rootRelative, baseRelative)
      : resolve(cwd, rootRelative, baseRelative, relative)
  }

  return relativeEqualsBase ? resolve(cwd, baseRelative) : resolve(cwd, baseRelative, relative)
}

export { resolveAbsoluteWithBase }
