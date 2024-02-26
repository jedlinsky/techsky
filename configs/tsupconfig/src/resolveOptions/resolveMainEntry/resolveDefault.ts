import { join } from 'node:path/posix'
import type { ResolveDefault } from './types.js'

const resolveDefault: ResolveDefault = function ({ srcDir }) {
  return join(srcDir, 'index.ts')
}

export { resolveDefault }
