import type { ResolveOutExtension } from './types.js'

const resolveOutExtension: ResolveOutExtension = function () {
  return function () {
    return { js: '.js' }
  }
}

export { resolveOutExtension }
