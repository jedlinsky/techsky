import { access, constants } from 'node:fs/promises'
import type { FileExists } from './types.js'

const fileExists: FileExists = async function (path) {
  try {
    // eslint-disable-next-line functional/no-expression-statements
    await access(path, constants.F_OK)

    return true
  } catch {
    return false
  }
}

export { fileExists }
