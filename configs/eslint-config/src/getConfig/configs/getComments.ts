import type { DefinedOptions } from 'getConfig'
import type { GetComments } from './types'

const todoTerms = ['FIXME', 'HACK', 'TODO', 'XXX']

const getComments: GetComments = function (options) {
  return {
    overrides: [
      {
        files: options.files.common,
        plugins: ['@stylistic/js', 'comment-annotations', 'jsdoc', ...(options.has.rule.todos ? ['todos'] : [])],
        rules: {
          '@stylistic/js/spaced-comment': ['error', 'always', { markers: ['/'] }],
          'comment-annotations/all-caps': 'error',
          'comment-annotations/no-extra-space': 'error',
          'comment-annotations/single-colon': 'error',
          'jsdoc/check-alignment': 'error',
          'jsdoc/check-indentation': 'error',
          'jsdoc/check-line-alignment': [
            'error',
            'never',
            {
              tags: [
                'deprecated',
                'description',
                'duplicate',
                'example',
                'format',
                'max',
                'min',
                'name',
                'originalName',
                'pattern',
                'request',
                'response',
                'secure',
                'summary',
                'tags'
              ]
            }
          ],
          'jsdoc/require-asterisk-prefix': 'error',
          'jsdoc/tag-lines': [
            'error',
            'always',
            {
              applyToEndTag: false,
              count: 0,
              endLines: 0,
              startLines: 1,
              tags: { description: { count: 1, lines: 'always' } }
            }
          ],
          'no-warning-comments': ['warn', { terms: todoTerms }],
          ...(options.has.rule.todos
            ? {
                'todos/only-documented-todos': [
                  'error',
                  {
                    location: 'start',
                    terms: todoTerms,
                    url: (options as DefinedOptions).rules.todos
                  }
                ]
              }
            : {}),
          'unicorn/expiring-todo-comments': 'error'
        }
      }
    ]
  }
}

export { getComments }
