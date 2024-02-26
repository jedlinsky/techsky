import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import type { WritePackageJson } from './types.js'

const writePackageJson: WritePackageJson = function ({ outDir, resolvedDistPackageJson }) {
  const data = `${JSON.stringify(resolvedDistPackageJson, null, 2)}\n`

  const filePath = resolve(process.cwd(), outDir, 'package.json')

  try {
    return writeFile(filePath, data)
  } catch {
    throw new Error(`Error writting ${filePath}.`)
  }
}

export { writePackageJson }
