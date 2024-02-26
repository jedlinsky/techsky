import { dirname, relative } from 'node:path'
import { pathMatchesGlobs } from './pathMatchesGlobs.js'
import type { ResolveOverrides } from './types.js'

const resolveOverrides: ResolveOverrides = function ({ configPath, filePath, options, overrides }) {
  const relativeFilePath = relative(dirname(configPath), filePath)

  return overrides.reduce((accumulator, override) => {
    if (!pathMatchesGlobs(relativeFilePath, override.files, override.excludeFiles)) {
      return accumulator
    }

    return {
      ...accumulator,
      ...override.options
    }
  }, options)
}

export { resolveOverrides }
