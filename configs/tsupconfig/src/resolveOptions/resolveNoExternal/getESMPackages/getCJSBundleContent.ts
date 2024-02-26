import { readFile } from 'node:fs/promises'
import type { GetCJSBundleContent } from './types.js'

const getCJSBundleContent: GetCJSBundleContent = async function ({ cjsBundleEntryPath }) {
  if (cjsBundleEntryPath === null) {
    return null
  }

  try {
    return await readFile(cjsBundleEntryPath, 'utf8')
  } catch {
    return null
  }
}

export { getCJSBundleContent }
