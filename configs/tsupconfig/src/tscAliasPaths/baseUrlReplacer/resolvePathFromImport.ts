import { newStringRegex } from 'tsc-alias/dist/utils/import-path-resolver.js'
import type { ResolvePathFromImport } from './types.js'

const resolvePathFromImport: ResolvePathFromImport = function (value) {
  return value.match(newStringRegex())?.groups?.['path']
}

export { resolvePathFromImport }
