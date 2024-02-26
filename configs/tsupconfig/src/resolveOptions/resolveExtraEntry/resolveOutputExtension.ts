import type { ResolveOutputExtension } from './types.js'

const resolveOutputExtension: ResolveOutputExtension = function ({ entryFormat, format }) {
  switch (format) {
    case 'cjs': {
      return entryFormat === 'cjs' ? 'js' : 'mjs'
    }

    case 'esm': {
      return entryFormat === 'cjs' ? 'cjs' : 'js'
    }
  }
}

export { resolveOutputExtension }
