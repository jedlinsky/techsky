import { checkPackage } from './checkPackage'
import { packages } from './packages'
import { resolveNext } from './resolveNext'
import { resolvePackageName } from './resolvePackageName'
import { resolveReact } from './resolveReact'
import type { HasPackage, ResolveHasPackage } from './types'

const resolveHasPackage: ResolveHasPackage = function ({ dependencies }) {
  const dependenciesNames = Object.keys(dependencies)

  const hasPackage = packages.reduce(
    (accumulator, packageName) => ({
      ...accumulator,
      [resolvePackageName(packageName)]: checkPackage({ dependenciesNames, packageName })
    }),
    {}
  ) as HasPackage

  const resolvedNext = resolveNext(hasPackage)

  return resolveReact(resolvedNext)
}

export { resolveHasPackage }
