import { noUnusedVars, paddingLineBetweenStatements } from './utils'
import type { GetTypeScriptFallback } from './types'

const getTypeScriptFallback: GetTypeScriptFallback = function (options) {
  return {
    overrides: [
      {
        files: options.files.javascript,
        plugins: ['@stylistic/js'],
        rules: {
          '@stylistic/js/lines-around-comment': [
            'error',
            {
              allowArrayStart: true,
              allowBlockStart: true,
              allowClassStart: true,
              allowObjectStart: true,
              beforeBlockComment: true
            }
          ],
          '@stylistic/js/no-extra-semi': 'error',
          '@stylistic/js/padding-line-between-statements': [
            'error',
            ...paddingLineBetweenStatements,
            { blankLine: 'always', next: ['cjs-export', 'export'], prev: '*' },
            { blankLine: 'never', next: ['cjs-export', 'export'], prev: ['cjs-export', 'export'] }
          ],
          'no-array-constructor': 'error',
          'no-const-assign': 'error',
          'no-dupe-args': 'error',
          'no-dupe-keys': 'error',
          'no-empty-function': 'error',
          'no-func-assign': 'error',
          'no-import-assign': 'error',
          'no-loss-of-precision': 'error',
          'no-new-symbol': 'error',
          'no-obj-calls': 'error',
          'no-redeclare': 'error',
          'no-undef': 'error',
          'no-unreachable': 'error',
          'no-unsafe-negation': 'error',
          'no-unused-vars': ['error', noUnusedVars],
          'valid-typeof': 'error'
        }
      },
      {
        files: [
          ...options.files.javascript,
          ...(options.has.typescript && options.type !== 'full' ? options.files.typescript : [])
        ],
        plugins: ['no-floating-promise'],
        rules: {
          'dot-notation': 'error',
          'no-constant-condition': 'error',
          'no-floating-promise/no-floating-promise': 'error',
          'no-implied-eval': 'error',
          'no-throw-literal': 'error',
          'require-await': 'error'
        }
      }
    ]
  }
}

export { getTypeScriptFallback }
