import { resolve } from 'node:path/posix'
import { executeCommand } from './executeCommand.js'
import type { Execute } from './types.js'

const execute: Execute = async function ({ executeOnWatch, mainEntry, onSuccess, outDir, watch }) {
  if (typeof onSuccess === 'string') {
    // eslint-disable-next-line functional/no-expression-statements
    await executeCommand(onSuccess)
  }

  const cleanup = typeof onSuccess === 'function' ? await onSuccess() : undefined

  if (executeOnWatch && mainEntry !== null && watch) {
    const entry = typeof executeOnWatch === 'string' ? executeOnWatch : mainEntry

    const command = `node ${resolve(outDir, entry)}`

    // eslint-disable-next-line functional/no-expression-statements
    await executeCommand(command)
  }

  return cleanup
}

export { execute }
