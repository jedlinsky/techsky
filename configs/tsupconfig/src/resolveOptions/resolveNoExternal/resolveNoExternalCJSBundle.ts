import { getESMPackages } from './getESMPackages/getESMPackages.js'
import type { ResolveNoExternalCJSBundle } from './types.js'

const resolveNoExternalCJSBundle: ResolveNoExternalCJSBundle = async function ({
  noExternal,
  noExternalDefaults,
  outDir,
  outputPath
}) {
  if (!noExternalDefaults) {
    return noExternal
  }

  const esmPackages = await getESMPackages({ outDir, outputPath, type: 'cjsBundle' })

  const noExternalWithDefaults = [...(esmPackages ?? []), ...(noExternal ?? [])]

  if (noExternalWithDefaults.length === 0) {
    return
  }

  return noExternalWithDefaults
}

export { resolveNoExternalCJSBundle }
