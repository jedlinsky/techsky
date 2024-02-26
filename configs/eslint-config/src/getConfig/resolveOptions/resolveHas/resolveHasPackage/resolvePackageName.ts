import { removePackageNameCaretAndDollar } from './removePackageNameCaretAndDollar'
import type { ResolvePackageName } from './types'

const resolvePackageName: ResolvePackageName = function (packageName) {
  const packageNameWithoutCaretAndDollar = removePackageNameCaretAndDollar({ packageName })

  const withoutScope = packageNameWithoutCaretAndDollar.startsWith('@')
    ? packageNameWithoutCaretAndDollar.replace('@', '')
    : packageNameWithoutCaretAndDollar

  const splitted = withoutScope.split(/-|\//)

  const resolvedLetterCase = splitted.map((segment, index) => {
    if (index === 0) {
      return segment.toLocaleLowerCase()
    }

    const firstUpperCase = segment.charAt(0).toLocaleUpperCase()
    const rest = segment.slice(1)

    return `${firstUpperCase}${rest}`
  })

  return resolvedLetterCase.join('')
}

export { resolvePackageName }
