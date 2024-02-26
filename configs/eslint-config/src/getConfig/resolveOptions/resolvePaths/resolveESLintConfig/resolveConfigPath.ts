import { resolveConfigPathRelative } from './resolveConfigPathRelative'
import type { ResolveConfigPath } from './types'

const resolveConfigPath: ResolveConfigPath = function ({ eslintConfigPath, workspaces }) {
  const fileName = eslintConfigPath.split('/').at(-1) as string

  const withoutFileName = eslintConfigPath.replace(fileName, '')

  if (withoutFileName === './') {
    return eslintConfigPath
  }

  return resolveConfigPathRelative({ fileName, withoutFileName, workspaces })
}

export { resolveConfigPath }
