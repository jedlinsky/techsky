import type { Prettier } from './types'

const defaultPrettierConfig: Prettier = {
  endOfLine: 'lf',
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'none'
}

export { defaultPrettierConfig }
