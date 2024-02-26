import { resolveOutputPath } from 'resolvePath/resolveOutputPath.js'
import type { ResolveIncludeCJSBundlePath } from './types.js'

const resolveIncludeCJSBundlePath: ResolveIncludeCJSBundlePath = function ({ includeCJSBundleEntry, srcDir }) {
  return resolveOutputPath({
    extension: 'cjs',
    path: includeCJSBundleEntry?.at(0) as string,
    srcDir
  })
}

export { resolveIncludeCJSBundlePath }
