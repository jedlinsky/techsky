import type { ResolveConfigPathRelative } from './types'

const resolveConfigPathRelative: ResolveConfigPathRelative = function ({ fileName, withoutFileName, workspaces }) {
  const withoutCurrentDirectoryNotation = withoutFileName.startsWith('./') ? withoutFileName.slice(2) : withoutFileName

  const withoutTrailingSlash = withoutCurrentDirectoryNotation.endsWith('/')
    ? withoutCurrentDirectoryNotation.slice(0, -1)
    : withoutCurrentDirectoryNotation

  const workspace = workspaces?.relative.find((workspace) => workspace.startsWith(withoutTrailingSlash))

  const withoutWorkspace = workspace ? withoutTrailingSlash.replace(workspace, '') : withoutTrailingSlash

  const withTrailingSlash = withoutWorkspace
    ? withoutWorkspace.endsWith('/')
      ? withoutWorkspace
      : `${withoutWorkspace}/`
    : './'

  return `${withTrailingSlash}${fileName}`
}

export { resolveConfigPathRelative }
