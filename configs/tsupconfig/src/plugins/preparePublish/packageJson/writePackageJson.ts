import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { resolvePackageJson } from './resolvePackageJson.js'
import type { WritePackageJson } from './types.js'

const writePackageJson: WritePackageJson = async function (props) {
  const resolvedPackage = resolvePackageJson(props)
  const data = `${JSON.stringify(resolvedPackage, null, 2)}\n`

  const filePath = resolve(process.cwd(), props.outDir, 'package.json')
  const directory = dirname(filePath)

  try {
    // eslint-disable-next-line functional/no-expression-statements
    await mkdir(directory)
  } catch {}

  return writeFile(filePath, data)
}

export { writePackageJson }
