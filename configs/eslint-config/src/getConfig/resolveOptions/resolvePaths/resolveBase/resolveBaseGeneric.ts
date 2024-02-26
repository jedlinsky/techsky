import { getPathResolver } from 'getConfig/resolveOptions/resolvePaths/getPathResolver'
import { resolveBaseEntries } from './resolveBaseEntries'
import type { ResolveBaseGeneric } from './types'

const defaultBaseUrl = './'

const resolveBaseGeneric: ResolveBaseGeneric = function ({ baseUrl, cwd, root }) {
  const resolvePath = getPathResolver({ cwd, rootRelative: root.relative })

  const resolvedBaseUrl = baseUrl ?? defaultBaseUrl

  const baseWithoutEntries = resolvePath(resolvedBaseUrl)

  const entries = resolveBaseEntries({ baseWithoutEntries })

  return {
    ...baseWithoutEntries,
    entries
  }
}

export { resolveBaseGeneric }
