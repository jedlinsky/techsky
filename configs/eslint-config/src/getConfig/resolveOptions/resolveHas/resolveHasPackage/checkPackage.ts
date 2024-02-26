import { removePackageNameCaretAndDollar } from './removePackageNameCaretAndDollar'
import type { CheckPackage } from './types'

const checkPackage: CheckPackage = function ({ dependenciesNames, packageName }) {
  return dependenciesNames.some((dependencyName) => {
    const startsWithCaret = packageName.startsWith('^')
    const endsWithDollar = packageName.endsWith('$')

    if (startsWithCaret || endsWithDollar) {
      const packageNameWithoutCaretAndDollar = removePackageNameCaretAndDollar({
        endsWithDollar,
        packageName,
        startsWithCaret
      })

      return startsWithCaret && endsWithDollar
        ? dependencyName === packageNameWithoutCaretAndDollar
        : startsWithCaret
          ? dependencyName.startsWith(packageNameWithoutCaretAndDollar)
          : dependencyName.endsWith(packageNameWithoutCaretAndDollar)
    }

    const packageNameWithScope = packageName.startsWith('@') ? packageName : `@${packageName}`
    const packageNameWithoutScope = packageName.startsWith('@') ? packageName.slice(1) : packageName

    return dependencyName.startsWith(packageNameWithScope) || dependencyName.startsWith(packageNameWithoutScope)
  })
}

export { checkPackage }
