import type { GetEmptyEmittedFiles } from './types.js'

const getEmptyEmittedFiles: GetEmptyEmittedFiles = function ({ buildResult }) {
  if (buildResult.metafile === undefined) {
    return null
  }

  const { outputs } = buildResult.metafile

  return Object.entries(outputs).reduce<readonly string[]>((accumulator, [path, { bytes }]) => {
    if (bytes) {
      return accumulator
    }

    const pathWithCurrentDirectoryNotation = path.startsWith('./') ? path : `./${path}`

    return [...accumulator, pathWithCurrentDirectoryNotation]
  }, [])
}

export { getEmptyEmittedFiles }
