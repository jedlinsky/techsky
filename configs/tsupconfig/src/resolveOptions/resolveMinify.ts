import type { ResolveMinify } from './types.js'

const resolveMinify: ResolveMinify = function ({ format, isBrowser, minify }) {
  if (minify !== undefined) {
    return minify === false ? false : true
  }

  if (isBrowser) {
    return true
  }

  return format === 'cjs' ? true : false
}

export { resolveMinify }
