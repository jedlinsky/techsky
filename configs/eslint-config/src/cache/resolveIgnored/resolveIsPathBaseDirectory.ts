import { join } from 'node:path/posix'
import type { ResolveIsPathBaseDirectory } from './types'

const resolveIsPathBaseDirectory: ResolveIsPathBaseDirectory = function ({ cache, cwdPosix, path }) {
  const relativeBasePathWithRoot = cache.config.settings.__options.paths.base.relativeWithRoot

  const absoluteBasePath = join(cwdPosix, relativeBasePathWithRoot)

  return absoluteBasePath === path
}

export { resolveIsPathBaseDirectory }
