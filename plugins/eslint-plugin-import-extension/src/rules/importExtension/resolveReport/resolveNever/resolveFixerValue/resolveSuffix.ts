import type { ResolveSuffix } from './types.js'

const resolveSuffix: ResolveSuffix = function ({ nameExtension }) {
  return `/index${nameExtension}`
}

export { resolveSuffix }
