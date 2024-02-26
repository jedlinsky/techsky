import type { SplitPath } from './types'

const splitPath: SplitPath = function (path) {
  return path.replace('./', '').split('/').slice(0, 2)
}

export { splitPath }
