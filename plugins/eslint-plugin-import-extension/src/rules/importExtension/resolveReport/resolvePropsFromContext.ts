import type { ResolvePropsFromContext } from './types.js'

const resolvePropsFromContext: ResolvePropsFromContext = function ({ context }) {
  const { options, parserServices } = context

  if (!parserServices) {
    return null
  }

  const { mapTSToJS, required } = options[0]

  const path = context.getPhysicalFilename?.()

  if (!path) {
    return null
  }

  const { program } = parserServices

  if (program === null) {
    return null
  }

  const compilerOptions = program.getCompilerOptions()

  return {
    compilerOptions,
    mapTSToJS,
    path,
    program,
    required
  }
}

export { resolvePropsFromContext }
