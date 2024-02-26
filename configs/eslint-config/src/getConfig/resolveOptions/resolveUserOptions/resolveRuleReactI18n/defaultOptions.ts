import type { DefaultOptions } from './types'

const defaultOptions: DefaultOptions = {
  callees: {},
  classProperties: {},
  jsxAttributes: {
    include: ['error', 'helperText', 'label', 'success', 'text', 'value']
  },
  jsxComponents: {},
  mergeWithDefault: true,
  message:
    'Some literal strings in JSX are disallowed. Use i18n function `t()` or disable (modify) rule in your ESLint configuration (`rules.reactI18n: null`).',
  mode: 'jsxOnly',
  objectProperties: {},
  shouldValidateTemplate: false,
  words: {}
}

export { defaultOptions }
