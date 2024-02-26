import { getESMPackages } from './getESMPackages/index.js'
import type { ResolveNoExternal } from './types.js'

const resolveNoExternal: ResolveNoExternal = async function ({ format, noExternal, noExternalDefaults, outDir }) {
  if (format === 'esm') {
    return noExternal
  }

  if (!noExternalDefaults) {
    return noExternal
  }

  const esmPackages = await getESMPackages({ outDir, type: 'root' })

  const noExternalWithDefaults = [...(esmPackages ?? []), ...(noExternal ?? [])]

  if (noExternalWithDefaults.length === 0) {
    return
  }

  return noExternalWithDefaults
}

export { resolveNoExternal }
