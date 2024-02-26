import path from 'node:path'
import { markerExists } from './markerExists.js'
import type { FindProjectRoot } from './types.js'

const findProjectRoot: FindProjectRoot = function (directory) {
  // eslint-disable-next-line functional/no-let
  let resolvedDirectory = `${directory}`

  // eslint-disable-next-line functional/no-loop-statements
  while (!markerExists(resolvedDirectory)) {
    const parentDirectory = path.resolve(resolvedDirectory, '..')

    if (parentDirectory === resolvedDirectory) {
      break
    }

    // eslint-disable-next-line functional/no-expression-statements
    resolvedDirectory = parentDirectory
  }

  return resolvedDirectory
}

export { findProjectRoot }
