import type { ResolveIncludeCJSBundle } from './types.js'

const resolveIncludeCJSBundle: ResolveIncludeCJSBundle = function ({ format, includeCJSBundle }) {
  if (format !== 'esm') {
    return false
  }

  return includeCJSBundle ?? false
}

export { resolveIncludeCJSBundle }
