import { resolvePath } from './resolvePath.js'
import type { ResolveCopy } from './types.js'

const resolveCopy: ResolveCopy = function ({ copy, outDir }) {
  if (copy === undefined) {
    return null
  }

  return copy.map((item) => {
    if (typeof item === 'string') {
      return {
        from: resolvePath({ path: item }),
        to: resolvePath({ path: outDir })
      }
    }

    if (item instanceof Array) {
      return {
        from: item.map((path) => resolvePath({ path })),
        to: resolvePath({ path: outDir })
      }
    }

    return {
      from: resolvePath({ path: item.from }),
      to: resolvePath({ path: item.to, prepend: outDir })
    }
  })
}

export { resolveCopy }
