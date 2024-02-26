import {
  getMUIPatterns,
  getNodeBuiltinModulesPattern,
  getPackageScopePattern,
  getParentImportPatterns,
  getRelativeImportPatterns,
  getTSConfigPathsPatterns
} from './getters'
import { resolveGenericModulesPattern } from './resolvers'
import { endsWithPattern, exactPattern, modulePatterns, regexPattern } from './utils'
import type { GetPatterns } from './types'

const getPatterns: GetPatterns = function ({ has, paths, scope }) {
  const { blitz, dateFns, emotion, lodash, mui, next, react, wdyr, yup, zod } = has.package

  // const { blitz, dateFns, emotion, lodash, mui, next, react, wdyr, yup, zod } = {
  //   blitz: true,
  //   dateFns: true,
  //   emotion: true,
  //   lodash: true,
  //   mui: true,
  //   next: true,
  //   react: true,
  //   wdyr: true,
  //   yup: true,
  //   zod: true
  // }

  const { tsConfigPaths } = paths

  const patterns = [
    ...(wdyr ? [exactPattern({ isSideEffect: true, moduleName: 'wdyr' })] : []),
    regexPattern.sideEffects,
    getNodeBuiltinModulesPattern(),
    ...(blitz ? modulePatterns({ moduleName: 'blitz', withScope: true }) : []),
    ...(next ? modulePatterns({ moduleName: 'next', withScope: true }) : []),
    ...(react ? modulePatterns({ moduleName: 'react', withScope: true }) : []),
    regexPattern.genericModules,
    ...(scope ? [getPackageScopePattern(scope)] : []),
    ...getTSConfigPathsPatterns(tsConfigPaths),
    ...(dateFns ? modulePatterns({ moduleName: 'date-fns' }) : []),
    ...(lodash ? modulePatterns({ moduleName: 'lodash' }) : []),
    ...(yup ? modulePatterns({ moduleName: 'yup' }) : []),
    ...(zod ? modulePatterns({ moduleName: 'zod' }) : []),
    ...(mui ? getMUIPatterns() : []),
    ...(emotion ? modulePatterns({ moduleName: 'emotion', withScope: true }) : []),
    ...getParentImportPatterns(),
    ...getRelativeImportPatterns(),
    ...(react ? [endsWithPattern({ pattern: 'styled', prependDot: true })] : []),
    regexPattern.any
  ]

  return resolveGenericModulesPattern({ patterns })
}

export { getPatterns }
