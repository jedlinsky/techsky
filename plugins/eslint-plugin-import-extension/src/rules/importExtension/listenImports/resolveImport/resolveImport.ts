import { resolveFilePath } from './resolveFilePath.js'
import type { ResolveImport } from './types.js'

const resolveImport: ResolveImport = function ({ baseDirectory, name, node }) {
  const filePath = resolveFilePath({ baseDirectory, name })

  return {
    filePath,
    name,
    node
  }
}

export { resolveImport }
