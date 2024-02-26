import { parse } from 'parse-gitignore'
import { readFile } from './readFile'
import type { ResolveGitIgnore } from './types'

const resolveGitIgnore: ResolveGitIgnore = function ({ absolutePath }) {
  const file = readFile({ absolutePath })

  if (!file) {
    return null
  }

  const { patterns } = parse(file)

  return [...new Set(patterns)]
}

export { resolveGitIgnore }
