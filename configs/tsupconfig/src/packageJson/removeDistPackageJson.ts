import { unlink } from 'node:fs/promises'
import { resolve } from 'node:path'
import { logger } from 'logger/index.js'
import type { RemoveDistPackageJson } from './types.js'

const removeDistPackageJson: RemoveDistPackageJson = async function ({ outDir, silent }) {
  const path = resolve(outDir, 'package.json')

  // eslint-disable-next-line functional/no-expression-statements
  await unlink(path)

  logger({
    silent,
    text: 'Temporary dist package.json',
    type: 'del'
  })
}

export { removeDistPackageJson }
