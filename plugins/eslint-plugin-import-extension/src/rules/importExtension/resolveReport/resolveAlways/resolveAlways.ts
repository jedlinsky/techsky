import { resolveFixerValue } from './resolveFixerValue/index.js'
import { getDiagnostic } from './getDiagnostic.js'
import { getFileContent } from './getFileContent.js'
import { reportAlways } from './reportAlways.js'
import { resolveFilePath } from './resolveFilePath.js'
import { resolveSuffix } from './resolveSuffix.js'
import type { ResolveAlways } from './types.js'

const resolveAlways: ResolveAlways = function ({ context, filePath, name, node, propsFromContext }) {
  const { compilerOptions, mapTSToJS, path, program } = propsFromContext

  const diagnostic = getDiagnostic({ name, path, program })

  if (diagnostic === null) {
    return
  }

  const fileContent = getFileContent({ path })

  if (fileContent === null) {
    return
  }

  const resolvedFilePath = resolveFilePath({ compilerOptions, filePath, name, path })

  if (resolvedFilePath === null) {
    return
  }

  const suffix = resolveSuffix({ name, resolvedFilePath })

  const fixerValue = resolveFixerValue({ mapTSToJS, resolvedFilePath, suffix })

  if (fixerValue === null) {
    return
  }

  reportAlways({ context, fixerValue, node })
}

export { resolveAlways }
