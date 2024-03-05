import type { ResolvePackageJson } from './types'

const resolvePackageJson: ResolvePackageJson = function ({ packageJson }) {
  const { build, dev, start } = packageJson.scripts ?? {}

  if (build?.includes('next build')) {
    return true
  }

  if (dev?.includes('next dev')) {
    return true
  }

  if (start?.includes('next start')) {
    return true
  }

  return false
}

export { resolvePackageJson }
