import type { ResolvePath } from './types'

const resolvePath: ResolvePath = function (path) {
  if (!path.startsWith('./')) {
    return null
  }

  const withoutCurrentDirectoryNotation = path.slice(2)

  const endsWithSlash = withoutCurrentDirectoryNotation.endsWith('/')

  if (endsWithSlash) {
    return withoutCurrentDirectoryNotation
  }

  const isDirectory = !path.includes('.') || path.lastIndexOf('.') < path.lastIndexOf('/') || path.endsWith('.')

  if (!isDirectory) {
    return withoutCurrentDirectoryNotation
  }

  return `${withoutCurrentDirectoryNotation}/`
}

export { resolvePath }
