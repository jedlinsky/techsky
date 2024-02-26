import type { GetFormatting } from './types'

const getFormatting: GetFormatting = function (options) {
  return {
    overrides: [
      {
        files: options.files.common,
        plugins: ['sort-destructure-keys', 'sort-keys-fix'],
        rules: {
          curly: 'error',
          'object-shorthand': 'error',
          'sort-destructure-keys/sort-destructure-keys': [
            'error',
            {
              caseSensitive: false
            }
          ],
          'sort-keys-fix/sort-keys-fix': [
            'error',
            'asc',
            {
              caseSensitive: false,
              natural: true
            }
          ],
          yoda: 'error'
        }
      },
      ...(options.prettier
        ? ([
            {
              extends: ['prettier'],
              files: options.files.commonWithJson,
              plugins: ['prettier'],
              rules: {
                curly: 'error', // overrides prettier extend
                'prettier/prettier': ['error', options.prettier, { usePrettierrc: false }]
              }
            }
          ] as const)
        : [])
    ]
  }
}

export { getFormatting }
