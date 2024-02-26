import { dirname, resolve } from 'node:path'
import type { ResolveBaseDirectory } from './types.js'

const resolveBaseDirectory: ResolveBaseDirectory = function ({ context }) {
  const fileName = context.getFilename()
  const absolutePath = resolve(fileName)

  return dirname(absolutePath)
}

export { resolveBaseDirectory }
