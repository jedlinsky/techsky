import { join } from 'node:path/posix'
import type { ResolveBundle } from './types.js'

const resolveBundle: ResolveBundle = function ({ bundle, srcDir }) {
  if (!bundle) {
    return
  }

  return join(srcDir, 'index.ts')
}

export { resolveBundle }
