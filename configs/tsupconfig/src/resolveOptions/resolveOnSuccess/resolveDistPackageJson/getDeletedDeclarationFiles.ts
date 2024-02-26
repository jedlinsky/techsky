import { relative, resolve } from 'node:path'
import type { GetDeletedDeclarationFiles } from './types.js'

const getDeletedDeclarationFiles: GetDeletedDeclarationFiles = function ({ files, outDir }) {
  const deletedDeclarationFiles = files.filter((path) => path.endsWith('.d.ts'))

  if (deletedDeclarationFiles.length === 0) {
    return null
  }

  return deletedDeclarationFiles.map((path) => {
    const absoluteOutputPath = resolve(outDir)
    const relativePath = relative(absoluteOutputPath, path)

    return `./${relativePath}`
  })
}

export { getDeletedDeclarationFiles }
