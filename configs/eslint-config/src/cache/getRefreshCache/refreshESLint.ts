import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { RefreshESLint } from './types'

const refreshESLint: RefreshESLint = function ({ cwd, eslintConfigPath }) {
  const absolutePath = resolve(cwd, eslintConfigPath)

  const fileContent = readFileSync(absolutePath)

  writeFileSync(absolutePath, fileContent)
}

export { refreshESLint }
