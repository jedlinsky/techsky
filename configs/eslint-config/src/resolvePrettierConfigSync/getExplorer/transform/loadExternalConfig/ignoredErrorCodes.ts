import type { IgnoredErrorCodes } from './types.js'

const ignoredErrorCodes = [
  'ERR_PACKAGE_PATH_NOT_EXPORTED',
  'ERR_REQUIRE_ESM',
  'MODULE_NOT_FOUND'
] satisfies IgnoredErrorCodes

export { ignoredErrorCodes }
