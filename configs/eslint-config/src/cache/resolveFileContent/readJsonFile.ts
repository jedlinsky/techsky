import { readFile } from './readFile'
import type { JsonFileNonNullable, ReadJsonFile } from './types'

const readJsonFile: ReadJsonFile = function ({ absolutePath }) {
  try {
    const file = readFile({ absolutePath })

    if (file === null) {
      return null
    }

    return JSON.parse(file) as JsonFileNonNullable
  } catch {
    return null
  }
}

export { readJsonFile }
