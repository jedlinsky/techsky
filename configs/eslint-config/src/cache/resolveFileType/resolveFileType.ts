import { basename } from 'node:path'
import { resolveIsGitIgnore } from './resolveIsGitIgnore'
import { resolveIsPackageJson } from './resolveIsPackageJson'
import { resolveIsPnpmWorkspace } from './resolveIsPnpmWorkspace'
import { resolveIsPrettier } from './resolveIsPrettier'
import { resolveIsTSConfig } from './resolveIsTSConfig'
import { resolveIsTurbo } from './resolveIsTurbo'
import type { ResolveFileType } from './types'

const resolveFileType: ResolveFileType = function ({ path }) {
  const fileName = basename(path)

  if (resolveIsGitIgnore({ fileName })) {
    return 'gitIgnore'
  }

  if (resolveIsPackageJson({ fileName })) {
    return 'packageJson'
  }

  if (resolveIsPnpmWorkspace({ fileName })) {
    return 'pnpmWorkspace'
  }

  if (resolveIsPrettier({ fileName })) {
    return 'prettier'
  }

  if (resolveIsTSConfig({ fileName })) {
    return 'tsConfig'
  }

  if (resolveIsTurbo({ fileName })) {
    return 'turbo'
  }

  return 'unknown'
}

export { resolveFileType }
