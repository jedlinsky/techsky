import { resolve } from 'node:path'
import type { ResolveRelativeWithRoot } from './types'

const resolveRelativeWithRoot: ResolveRelativeWithRoot = function ({ absolute, cwd, fileName, resolvePath }) {
  const isNotInWorkspace = resolve(absolute, '..') === cwd

  if (isNotInWorkspace) {
    return {
      relativeWithRoot: fileName,
      relativeWithRootSystem: fileName
    }
  }

  const { relativeWithRoot, relativeWithRootSystem } = resolvePath.withRoot(fileName)

  return {
    relativeWithRoot,
    relativeWithRootSystem
  }
}

export { resolveRelativeWithRoot }
