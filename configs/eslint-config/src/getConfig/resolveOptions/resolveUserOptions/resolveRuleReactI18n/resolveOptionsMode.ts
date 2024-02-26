import type { ResolveOptionsMode } from './types'

const resolveOptionsMode: ResolveOptionsMode = function (mode) {
  switch (mode) {
    case 'jsxOnly': {
      return 'jsx-only'
    }

    case 'jsxTextOnly': {
      return 'jsx-text-only'
    }

    default: {
      return mode
    }
  }
}

export { resolveOptionsMode }
