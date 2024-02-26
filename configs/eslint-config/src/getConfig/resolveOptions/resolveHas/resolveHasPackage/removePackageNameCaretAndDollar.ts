import type { RemovePackageNameCaretAndDollar } from './types'

const removePackageNameCaretAndDollar: RemovePackageNameCaretAndDollar = function ({
  endsWithDollar,
  packageName,
  startsWithCaret
}) {
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const caret = startsWithCaret === undefined ? packageName.startsWith('^') : startsWithCaret

  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  const dollar = endsWithDollar === undefined ? packageName.endsWith('$') : endsWithDollar

  return caret && dollar
    ? packageName.slice(1, -1)
    : caret
      ? packageName.slice(1)
      : dollar
        ? packageName.slice(0, -1)
        : packageName
}

export { removePackageNameCaretAndDollar }
