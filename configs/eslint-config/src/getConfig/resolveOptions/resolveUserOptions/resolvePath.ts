import type { ResolvePath } from './types'

const resolvePath: ResolvePath = function (path) {
  if (path.startsWith('../') || path.startsWith('./')) {
    return path
  }

  if (path === '..') {
    return '../'
  }

  if (path === '.') {
    return './'
  }

  return `./${path}`
}

export { resolvePath }
