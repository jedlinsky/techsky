import { getPreventAbbreviations, shortAllowedNames } from './utils'
import type { GetStylistic } from './types'

const getStylistic: GetStylistic = function (options) {
  return {
    overrides: [
      {
        extends: [
          'plugin:functional/lite',
          ...(options.has.package.lodash
            ? ['plugin:lodash-fp/recommended', 'plugin:you-dont-need-lodash-underscore/compatible']
            : []),
          'plugin:promise/recommended'
        ],
        files: options.files.common,
        plugins: ['@getify/proper-arrows', 'destructure-depth', 'fpcs', 'functional', 'toplevel', 'unicorn'],
        rules: {
          '@getify/proper-arrows/params': [
            'error',
            { allowed: shortAllowedNames, count: 4, length: 2, unused: 'none' }
          ],
          '@getify/proper-arrows/return': ['error', { object: false, ternary: 6 }],
          '@getify/proper-arrows/where': ['error', { global: false, 'global-declaration': true, property: false }],
          'destructure-depth/max-depth': 'error',
          eqeqeq: 'error',
          'fpcs/no-gremlin-chars': 'error',
          'func-style': 'error',
          'functional/immutable-data': 'off',
          'functional/no-mixed-types': 'off',
          'functional/no-return-void': 'off',
          'functional/no-throw-statements': 'off',
          ...(options.type === 'full'
            ? {
                'functional/prefer-immutable-types': [
                  'error',
                  {
                    enforcement: 'None',
                    ignoreInferredTypes: true,
                    parameters: {
                      enforcement: 'ReadonlyShallow'
                    }
                  }
                ]
              }
            : {
                'functional/prefer-immutable-types': 'off'
              }),
          'functional/prefer-readonly-type': 'error',
          ...(options.type === 'full'
            ? {
                'functional/prefer-tacit': 'error'
              }
            : {}),
          'id-length': ['error', { exceptionPatterns: shortAllowedNames }],
          ...(options.has.package.lodash
            ? {
                'lodash-fp/consistent-name': 'off',
                'lodash-fp/use-fp': 'off'
              }
            : {}),
          'max-depth': ['error', { max: 3 }],
          'max-lines-per-function': ['error', 80],
          'max-params': ['error', { max: 3 }],
          'no-constant-binary-expression': 'error',
          'no-implicit-coercion': 'error',
          'no-irregular-whitespace': 'error',
          'no-negated-condition': 'error',
          'no-param-reassign': 'error',
          'no-restricted-syntax': [
            'error',
            {
              message:
                "Using function expression in object is not allowed. Use '{ property: () => void }' instead of '{ method() { return void } }'",
              selector: 'ObjectExpression > Property > FunctionExpression'
            }
          ],
          'no-unsafe-optional-chaining': 'error',
          'no-var': 'error',
          'prefer-arrow-callback': 'error',
          'prefer-const': 'error',
          'prefer-object-has-own': 'error',
          'prefer-rest-params': 'error',
          'prefer-spread': 'error',
          'prefer-template': 'error',
          radix: 'error',
          'toplevel/no-toplevel-let': 'error',
          'toplevel/no-toplevel-var': 'error',
          'unicorn/consistent-destructuring': 'error',
          'unicorn/consistent-function-scoping': 'error',
          'unicorn/no-console-spaces': 'error',
          'unicorn/no-empty-file': 'error',
          'unicorn/no-thenable': 'error',
          'unicorn/no-typeof-undefined': 'error',
          'unicorn/no-unnecessary-await': 'error',
          'unicorn/no-unreadable-iife': 'error',
          'unicorn/no-useless-fallback-in-spread': 'error',
          'unicorn/no-useless-length-check': 'error',
          'unicorn/no-useless-promise-resolve-reject': 'error',
          'unicorn/no-useless-spread': 'error',
          'unicorn/no-useless-switch-case': 'error',
          'unicorn/no-useless-undefined': 'error',
          'unicorn/prefer-array-flat': 'error',
          'unicorn/prefer-array-flat-map': 'error',
          'unicorn/prefer-at': 'error',
          'unicorn/prefer-date-now': 'error',
          'unicorn/prefer-default-parameters': 'error',
          'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
          'unicorn/prefer-json-parse-buffer': 'error',
          'unicorn/prefer-logical-operator-over-ternary': 'error',
          'unicorn/prefer-modern-math-apis': 'error',
          'unicorn/prefer-native-coercion-functions': 'error',
          'unicorn/prefer-negative-index': 'error',
          'unicorn/prefer-node-protocol': 'error',
          'unicorn/prefer-number-properties': 'error',
          'unicorn/prevent-abbreviations': getPreventAbbreviations(options),
          'unicorn/relative-url-style': 'error',
          'unicorn/require-array-join-separator': 'error',
          'unicorn/require-number-to-fixed-digits-argument': 'error',
          'unicorn/text-encoding-identifier-case': 'error'
        }
      },
      {
        ...(options.files.noSecretsExclude
          ? {
              excludedFiles: options.files.noSecretsExclude
            }
          : {}),
        files: options.files.common,
        plugins: ['no-secrets'],
        rules: {
          'no-secrets/no-secrets': 'error'
        }
      },
      ...(options.type === 'full'
        ? ([
            {
              excludedFiles: [...options.files.root, ...options.files.test],
              files: options.files.common,
              plugins: ['functional'],
              rules: {
                'functional/no-expression-statements': [
                  'error',
                  {
                    ignoreCodePattern: [
                      ...(options.has.package.react ? ['.*\\.current'] : []),
                      ...(options.has.package.next ? ['.*Page\\.config'] : []),
                      '.*\\.delete',
                      '.*\\.set',
                      '^module\\.exports'
                    ],
                    ignoreVoid: true
                  }
                ]
              }
            }
          ] as const)
        : []),
      {
        ...(options.files.env
          ? {
              excludedFiles: options.files.env
            }
          : {}),
        files: options.files.common,
        plugins: ['n'],
        rules: {
          'n/no-process-env': 'error'
        }
      },
      {
        files: options.files.commonAtBase,
        plugins: ['functional'],
        rules: {
          'functional/immutable-data': [
            'error',
            {
              ignoreAccessorPattern: [
                ...(options.has.package.react
                  ? ['*.current', '*.current*.**', ...(options.has.package.next ? ['**Page.config'] : [])]
                  : []),
                'module.exports'
              ]
            }
          ]
        }
      }
    ]
  }
}

export { getStylistic }
