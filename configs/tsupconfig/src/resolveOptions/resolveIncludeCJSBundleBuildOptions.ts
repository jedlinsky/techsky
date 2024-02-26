import { resolveNoExternalCJSBundle } from './resolveNoExternal/index.js'
import type { ResolveIncludeCJSBundleBuildOptions } from './types.js'

const resolveIncludeCJSBundleBuildOptions: ResolveIncludeCJSBundleBuildOptions = async function ({
  extra,
  ...defineConfigOptions
}) {
  const noExternal = await resolveNoExternalCJSBundle(extra)

  return {
    ...defineConfigOptions,
    ...(noExternal ? { noExternal } : {})
  }
}

export { resolveIncludeCJSBundleBuildOptions }
