import { readFileSync } from 'node:fs'
import type { ReadFile } from './types'

const readFile: ReadFile = function ({ absolutePath }) {
  try {
    return readFileSync(absolutePath, 'utf8')
  } catch {
    return null
  }
}

export { readFile }
