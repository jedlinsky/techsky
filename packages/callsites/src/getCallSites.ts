import type { GetCallSites } from './types.js'

const getCallSites: GetCallSites = function () {
  const prepareStackTraceInitial = Error.prepareStackTrace

  // eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
  Error.prepareStackTrace = (_error, structuredStackTrace) => structuredStackTrace

  const stack = new Error().stack as unknown as readonly NodeJS.CallSite[]

  // eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
  Error.prepareStackTrace = prepareStackTraceInitial

  return stack.slice(1)
}

export { getCallSites }
