import { extname } from 'node:path/posix'
import { resolveFixerValue } from './resolveFixerValue/index.js'
import { reportNever } from './reportNever.js'
import type { ResolveNever } from './types.js'

const resolveNever: ResolveNever = function ({ context, name, node }) {
  const nameExtension = extname(name)

  if (nameExtension === '' || nameExtension === '.json') {
    return
  }

  const fixerValue = resolveFixerValue({ name, nameExtension, node })

  reportNever({ context, fixerValue, node })
}

export { resolveNever }
