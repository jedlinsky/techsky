import type { GetIsPathInBaseDirectory } from './types'

const getIsPathInBaseDirectory: GetIsPathInBaseDirectory = function ({ config, posixPath }) {
  const { isMonorepoRoot, paths } = config.settings.__options

  if (isMonorepoRoot) {
    return false
  }

  const relativeBaseWithRoot = paths.base.relativeWithRoot

  return posixPath.startsWith(relativeBaseWithRoot)
}

export { getIsPathInBaseDirectory }
