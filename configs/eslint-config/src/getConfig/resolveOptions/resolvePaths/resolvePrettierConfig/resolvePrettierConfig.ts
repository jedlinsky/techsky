import { basename } from 'node:path'
import { resolveConfigFile } from 'resolvePrettierConfigSync'
import { resolveRelativeWithRoot } from './resolveRelativeWithRoot'
import type { ResolvePrettierConfig } from './types'

const resolvePrettierConfig: ResolvePrettierConfig = function ({ cwd, resolvePath, root }) {
  const absolute = resolveConfigFile(root.absolute)

  if (absolute === null) {
    return null
  }

  const fileName = basename(absolute)

  const { relativeWithRoot, relativeWithRootSystem } = resolveRelativeWithRoot({ absolute, cwd, fileName, resolvePath })

  return {
    absolute,
    relative: fileName,
    relativeSystem: fileName,
    relativeWithRoot,
    relativeWithRootSystem
  }
}

export { resolvePrettierConfig }
