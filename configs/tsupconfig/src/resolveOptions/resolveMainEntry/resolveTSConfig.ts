import { join } from 'node:path/posix'
import type { ResolveTSConfig } from './types.js'

const resolveTSConfig: ResolveTSConfig = function ({ tsConfig }) {
  if (!tsConfig.compilerOptions?.baseUrl) {
    return
  }

  return join(tsConfig.compilerOptions.baseUrl, 'index.ts')
}

export { resolveTSConfig }
