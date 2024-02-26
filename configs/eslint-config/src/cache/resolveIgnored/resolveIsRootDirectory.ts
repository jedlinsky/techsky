import type { ResolveIsRootDirectory } from './types'

const resolveIsRootDirectory: ResolveIsRootDirectory = function ({ cwdPosix, path }) {
  return path === cwdPosix
}

export { resolveIsRootDirectory }
