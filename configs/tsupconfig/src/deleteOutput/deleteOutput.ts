import { relative, resolve } from 'node:path'
import { deleteAsync } from 'del'
import { logger } from 'logger/index.js'
import type { DeleteOutput } from './types.js'

const deleteOutput: DeleteOutput = async function ({ outDir, silent }) {
  const absoluteOutDir = resolve(outDir)

  const [path] = await deleteAsync(absoluteOutDir)

  if (path === undefined) {
    return
  }

  logger({
    silent,
    text: relative(process.cwd(), path),
    type: 'del'
  })
}

export { deleteOutput }
