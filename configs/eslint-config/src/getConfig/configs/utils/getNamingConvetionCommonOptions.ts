import { resolveNamingConventionExclude } from './resolveNamingConventionExclude'
import type { GetNamingConvetionCommonOptions } from './types'

const getNamingConvetionCommonOptions: GetNamingConvetionCommonOptions = function (options) {
  const exclude = resolveNamingConventionExclude(options)

  return [
    {
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'allowDouble',
      selector: 'function'
    },
    {
      format: ['camelCase'],
      leadingUnderscore: 'allowSingleOrDouble',
      selector: 'memberLike'
    },
    {
      format: ['PascalCase'],
      leadingUnderscore: 'allowSingleOrDouble',
      selector: 'typeLike'
    },
    {
      format: ['PascalCase'],
      prefix: ['T'],
      selector: 'typeParameter'
    },
    {
      format: null,
      modifiers: ['requiresQuotes'],
      selector: 'memberLike'
    },
    {
      format: null,
      modifiers: ['destructured'],
      selector: 'variable'
    },
    ...(exclude === null
      ? []
      : [
          {
            filter: {
              match: true,
              regex: exclude
            },
            format: null,
            selector: 'property'
          }
        ])
  ] as const
}

export { getNamingConvetionCommonOptions }
