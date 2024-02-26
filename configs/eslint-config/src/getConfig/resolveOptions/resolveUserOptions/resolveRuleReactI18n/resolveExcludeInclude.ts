import type { ResolveExcludeInclude } from './types'

const resolveExcludeInclude: ResolveExcludeInclude = function ({ defaultValue, value }) {
  const hasExclude = 'exclude' in defaultValue || 'exclude' in value
  const hasInclude = 'include' in defaultValue || 'include' in value

  const exclude = hasExclude ? [...(defaultValue.exclude ?? []), ...(value.exclude ?? [])] : null
  const include = hasInclude ? [...(defaultValue.include ?? []), ...(value.include ?? [])] : null

  return {
    ...(exclude ? { exclude } : {}),
    ...(include ? { include } : {})
  }
}

export { resolveExcludeInclude }
