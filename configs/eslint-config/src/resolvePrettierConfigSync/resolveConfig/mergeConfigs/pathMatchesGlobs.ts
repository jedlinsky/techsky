import { isMatch } from 'micromatch'
import { partition } from './partition.js'
import type { PathMatchesGlobs, PatternList } from './types.js'

const pathMatchesGlobs: PathMatchesGlobs = function (filePath, patterns, ignore) {
  const patternList: PatternList = Array.isArray(patterns) ? patterns : [patterns]

  const [withSlashes, withoutSlashes] = partition(patternList, (pattern) => pattern.includes('/'))

  const isMatchWithSlashes = isMatch(filePath, withSlashes, { basename: false, dot: true, ignore })
  const isMatchWithoutSlashes = isMatch(filePath, withoutSlashes, { basename: true, dot: true, ignore })

  return isMatchWithoutSlashes || isMatchWithSlashes
}

export { pathMatchesGlobs }
