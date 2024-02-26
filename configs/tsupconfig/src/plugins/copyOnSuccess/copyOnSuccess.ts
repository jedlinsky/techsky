import { relative } from 'node:path'
import cpy from 'cpy'
import { logger } from 'logger/index.js'
import { resolveCopy } from './resolveCopy.js'
import type { CopyOnSuccess } from './types.js'

const copyOnSuccess: CopyOnSuccess = async function ({ augmentation, copy, silent }) {
  const resolvedCopy = resolveCopy({ augmentation, copy })

  if (resolvedCopy === null) {
    return
  }

  const promises = resolvedCopy.map(async ({ augmentation, from, to }) => {
    const filePaths = await cpy(from, to, {
      filter: ({ relativePath }) => relativePath !== 'package.json',
      flat: augmentation
    })

    filePaths.forEach((filePath) =>
      logger({
        silent,
        text: relative(process.cwd(), filePath),
        type: 'cpy'
      })
    )
  })

  // eslint-disable-next-line functional/no-expression-statements
  await Promise.all(promises)
}

export { copyOnSuccess }
