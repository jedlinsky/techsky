import type { ResolveType } from './types.js'

const resolveType: ResolveType = function ({ format }) {
  switch (format) {
    case 'cjs': {
      return '\x1b[32mCJS\x1b[39m'
    }

    case 'cpy': {
      return '\x1b[32mCPY\x1b[39m'
    }

    case 'del': {
      return '\x1b[33mDEL\x1b[39m'
    }

    case 'dts': {
      return '\x1b[34mDTS\x1b[39m'
    }

    case 'esm': {
      return '\x1b[32mESM\x1b[39m'
    }

    case 'tsa': {
      return '\x1b[32mTSA\x1b[39m'
    }

    case 'tsa-info': {
      return '\x1b[34mTSA\x1b[39m'
    }

    default: {
      return '\x1b[34mCLI\x1b[39m'
    }
  }
}

export { resolveType }
