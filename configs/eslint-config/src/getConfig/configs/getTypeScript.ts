import {
  getNamingConvetionCommonOptions,
  noUnusedVars,
  paddingLineBetweenStatements,
  tsAllowedReactNamingRegex
} from './utils'
import type { GetTypeScript } from './types'

const getTypeScript: GetTypeScript = function (options) {
  const namingConvetionCommonOptions = options.has.typescript ? getNamingConvetionCommonOptions(options) : null

  return {
    overrides: [
      ...(options.has.typescript
        ? ([
            {
              files: options.files.typescript,
              parser: '@typescript-eslint/parser',
              parserOptions: {
                ...(options.type === 'full' && options.paths.tsConfig
                  ? ({
                      project: options.paths.tsConfig.relativeWithRoot
                    } as const)
                  : {})
              },
              plugins: [
                ...(options.format === 'esm' && options.type === 'full' ? ['@techsky/import-extension'] : []),
                '@typescript-eslint',
                'typescript-sort-keys'
              ],
              rules: {
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/array-type': 'error',
                '@typescript-eslint/ban-ts-comment': 'error',
                '@typescript-eslint/ban-types': 'error',
                '@typescript-eslint/consistent-generic-constructors': 'error',
                '@typescript-eslint/consistent-type-assertions': 'error',
                '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
                '@typescript-eslint/consistent-type-imports': 'error',
                '@typescript-eslint/lines-around-comment': [
                  'error',
                  {
                    allowArrayStart: true,
                    allowBlockStart: true,
                    allowClassStart: true,
                    allowEnumStart: true,
                    allowInterfaceStart: true,
                    allowModuleStart: true,
                    allowObjectStart: true,
                    allowTypeStart: true,
                    beforeBlockComment: true
                  }
                ],
                '@typescript-eslint/method-signature-style': 'error',
                '@typescript-eslint/no-array-constructor': 'error',
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                '@typescript-eslint/no-duplicate-enum-values': 'error',
                '@typescript-eslint/no-dynamic-delete': 'error',
                '@typescript-eslint/no-empty-function': 'error',
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-explicit-any': [
                  'error',
                  {
                    fixToUnknown: true
                  }
                ],
                '@typescript-eslint/no-extra-non-null-assertion': 'error',
                '@typescript-eslint/no-extra-semi': 'error',
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/no-invalid-void-type': 'error',
                '@typescript-eslint/no-loss-of-precision': 'error',
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
                '@typescript-eslint/no-non-null-assertion': 'error',
                '@typescript-eslint/no-this-alias': 'error',
                '@typescript-eslint/no-unnecessary-type-constraint': 'error',
                '@typescript-eslint/no-unused-vars': ['error', noUnusedVars],
                '@typescript-eslint/no-useless-empty-export': 'error',
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/padding-line-between-statements': [
                  'error',
                  ...paddingLineBetweenStatements,
                  { blankLine: 'always', next: ['export', 'exports'], prev: '*' },
                  { blankLine: 'never', next: ['export', 'exports'], prev: ['export', 'exports'] },
                  { blankLine: 'always', next: ['interface', 'type'], prev: '*' },
                  { blankLine: 'always', next: '*', prev: ['interface', 'type'] }
                ],
                '@typescript-eslint/prefer-as-const': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-function-type': 'error',
                '@typescript-eslint/prefer-literal-enum-member': 'error',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                '@typescript-eslint/prefer-ts-expect-error': 'error',
                '@typescript-eslint/sort-type-constituents': 'error',
                '@typescript-eslint/triple-slash-reference': 'error',
                '@typescript-eslint/unified-signatures': 'error',
                'typescript-sort-keys/interface': [
                  'error',
                  'asc',
                  {
                    caseSensitive: false,
                    natural: true
                  }
                ],
                'typescript-sort-keys/string-enum': [
                  'error',
                  'asc',
                  {
                    caseSensitive: false
                  }
                ],
                ...(options.type === 'full'
                  ? ({
                      ...(options.format === 'esm'
                        ? ({
                            '@techsky/import-extension/import-extension': [
                              'error',
                              {
                                mapTSToJS: options.has.package.next ? false : true,
                                required: 'always'
                              }
                            ]
                          } as const)
                        : {}),
                      '@typescript-eslint/await-thenable': 'error',
                      '@typescript-eslint/consistent-type-exports': 'error',
                      '@typescript-eslint/dot-notation': 'error',
                      '@typescript-eslint/no-base-to-string': 'error',
                      '@typescript-eslint/no-duplicate-type-constituents': 'error',
                      '@typescript-eslint/no-floating-promises': 'error',
                      '@typescript-eslint/no-for-in-array': 'error',
                      '@typescript-eslint/no-implied-eval': 'error',
                      '@typescript-eslint/no-meaningless-void-operator': 'error',
                      '@typescript-eslint/no-misused-promises': 'error',
                      '@typescript-eslint/no-throw-literal': 'error',
                      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
                      '@typescript-eslint/no-unnecessary-condition': 'error',
                      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
                      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
                      '@typescript-eslint/no-unsafe-argument': 'error',
                      '@typescript-eslint/no-unsafe-assignment': 'error',
                      '@typescript-eslint/no-unsafe-call': 'error',
                      '@typescript-eslint/no-unsafe-enum-comparison': 'error',
                      '@typescript-eslint/no-unsafe-member-access': 'error',
                      '@typescript-eslint/no-unsafe-return': 'error',
                      '@typescript-eslint/no-unsafe-unary-minus': 'error',
                      '@typescript-eslint/prefer-includes': 'error',
                      '@typescript-eslint/prefer-nullish-coalescing': 'error',
                      '@typescript-eslint/prefer-optional-chain': 'error',
                      '@typescript-eslint/prefer-reduce-type-parameter': 'error',
                      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
                      '@typescript-eslint/require-await': 'error',
                      '@typescript-eslint/restrict-plus-operands': 'error',
                      '@typescript-eslint/restrict-template-expressions': 'error',
                      '@typescript-eslint/unbound-method': 'error'
                    } as const)
                  : {})
              }
            },
            {
              files: options.files.standardTypeScript,
              rules: {
                '@typescript-eslint/naming-convention': [
                  'error',
                  ...(namingConvetionCommonOptions ?? []),
                  {
                    format: ['camelCase', 'UPPER_CASE'],
                    leadingUnderscore: 'allowSingleOrDouble',
                    selector: 'variable'
                  },
                  ...(options.has.package.react
                    ? [
                        {
                          filter: {
                            match: true,
                            regex: tsAllowedReactNamingRegex
                          },
                          format: ['camelCase', 'PascalCase'],
                          leadingUnderscore: 'allowSingleOrDouble',
                          selector: 'memberLike'
                        },
                        {
                          filter: {
                            match: true,
                            regex: tsAllowedReactNamingRegex
                          },
                          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                          leadingUnderscore: 'allowSingleOrDouble',
                          selector: 'variable'
                        }
                      ]
                    : [])
                ]
              }
            },
            {
              files: options.files.reactTypeScript,
              rules: {
                '@typescript-eslint/naming-convention': [
                  'error',
                  ...(namingConvetionCommonOptions ?? []),
                  {
                    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                    leadingUnderscore: 'allowSingleOrDouble',
                    selector: 'variable'
                  }
                ]
              }
            }
          ] as const)
        : [])
    ]
  }
}

export { getTypeScript }
