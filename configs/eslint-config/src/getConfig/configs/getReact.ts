import { getReactExhaustiveDeps, resolveJSXPropAllowList } from './utils'
import type { GetReact } from './types'

const getReact: GetReact = function (options) {
  const jsxPropAllowList = resolveJSXPropAllowList(options)

  return {
    overrides: [
      ...(options.has.package.react
        ? ([
            {
              extends: ['plugin:react/recommended'],
              files: options.files.commonAtBase,
              parserOptions: {
                jsxPragma: null
              },
              plugins: [
                ...(options.has.package.emotion ? ['@emotion'] : []),
                ...(options.has.package.next ? ['@next/next'] : []),
                // TODO: when updated, replace patch with original
                '@techsky/react-perf',
                'better-styled-components',
                ...(options.rules.reactI18n === null ? [] : ['i18next']),
                'react-etc',
                'react-func',
                'react-hooks',
                // TODO: not working with typescript?
                // 'react-hooks-order',
                'sort-react-dependency-arrays'
              ],
              rules: {
                ...(options.has.package.emotion
                  ? ({
                      '@emotion/syntax-preference': ['error', 'string']
                    } as const)
                  : {}),
                ...(options.has.package.next
                  ? ({
                      '@next/next/google-font-display': 'error',
                      '@next/next/google-font-preconnect': 'error',
                      '@next/next/inline-script-id': 'error',
                      '@next/next/next-script-for-ga': 'error',
                      '@next/next/no-assign-module-variable': 'error',
                      '@next/next/no-async-client-component': 'error',
                      ...(options.files.nextJSPagesDirs
                        ? ({
                            '@next/next/no-before-interactive-script-outside-document': 'error'
                          } as const)
                        : {}),
                      '@next/next/no-css-tags': 'error',
                      '@next/next/no-document-import-in-page': 'error',
                      '@next/next/no-duplicate-head': 'error',
                      '@next/next/no-head-element': 'error',
                      '@next/next/no-head-import-in-document': 'error',
                      ...(options.files.nextJSPagesDirs
                        ? ({
                            '@next/next/no-html-link-for-pages': ['error', options.files.nextJSPagesDirs]
                          } as const)
                        : {}),
                      '@next/next/no-img-element': 'error',
                      '@next/next/no-page-custom-font': 'error',
                      '@next/next/no-script-component-in-head': 'error',
                      '@next/next/no-styled-jsx-in-document': 'error',
                      '@next/next/no-sync-scripts': 'error',
                      '@next/next/no-title-in-document-head': 'error',
                      '@next/next/no-typos': 'error',
                      '@next/next/no-unwanted-polyfillio': 'error'
                    } as const)
                  : {}),
                // TODO: when updated, replace patch with original
                '@techsky/react-perf/jsx-no-new-array-as-prop': jsxPropAllowList
                  ? (['error', { allowList: jsxPropAllowList }] as const)
                  : 'error',
                '@techsky/react-perf/jsx-no-new-function-as-prop': jsxPropAllowList
                  ? (['error', { allowList: jsxPropAllowList }] as const)
                  : 'error',
                '@techsky/react-perf/jsx-no-new-object-as-prop': jsxPropAllowList
                  ? (['error', { allowList: jsxPropAllowList }] as const)
                  : 'error',
                'better-styled-components/sort-declarations-alphabetically': 'error',
                ...(options.rules.reactI18n === null
                  ? {}
                  : { 'i18next/no-literal-string': ['error', options.rules.reactI18n] as const }),
                'react/display-name': 'off',
                ...(options.rules.reactForbidElements === 'none'
                  ? {}
                  : {
                      'react/forbid-elements': [
                        'error',
                        {
                          forbid:
                            options.rules.reactForbidElements === 'all'
                              ? [
                                  'a',
                                  'abbr',
                                  'address',
                                  'area',
                                  'article',
                                  'aside',
                                  'audio',
                                  'b',
                                  'bdi',
                                  'bdo',
                                  'blockquote',
                                  'br',
                                  'button',
                                  'canvas',
                                  'caption',
                                  'cite',
                                  'code',
                                  'col',
                                  'colgroup',
                                  'data',
                                  'datalist',
                                  'dd',
                                  'del',
                                  'details',
                                  'dfn',
                                  'dialog',
                                  'div',
                                  'dl',
                                  'dt',
                                  'em',
                                  'embed',
                                  'fieldset',
                                  'figcaption',
                                  'figure',
                                  'footer',
                                  'form',
                                  'h1',
                                  'h2',
                                  'h3',
                                  'h4',
                                  'h5',
                                  'h6',
                                  'header',
                                  'hgroup',
                                  'hr',
                                  'i',
                                  'iframe',
                                  'img',
                                  'input',
                                  'ins',
                                  'kbd',
                                  'label',
                                  'legend',
                                  'li',
                                  'main',
                                  'map',
                                  'mark',
                                  'menu',
                                  'meter',
                                  'nav',
                                  'noscript',
                                  'object',
                                  'ol',
                                  'optgroup',
                                  'option',
                                  'output',
                                  'p',
                                  'param',
                                  'picture',
                                  'pre',
                                  'progress',
                                  'q',
                                  'rp',
                                  'rt',
                                  'ruby',
                                  's',
                                  'samp',
                                  'script',
                                  'section',
                                  'select',
                                  'slot',
                                  'small',
                                  'source',
                                  'span',
                                  'strong',
                                  'sub',
                                  'summary',
                                  'sup',
                                  'table',
                                  'tbody',
                                  'td',
                                  'template',
                                  'textarea',
                                  'tfoot',
                                  'th',
                                  'thead',
                                  'time',
                                  'tr',
                                  'track',
                                  'u',
                                  'ul',
                                  'var',
                                  'video',
                                  'wbr'
                                ]
                              : options.rules.reactForbidElements
                        }
                      ] as const
                    }),
                'react/function-component-definition': [
                  'error',
                  {
                    namedComponents: 'function-expression'
                  }
                ],
                'react/jsx-boolean-value': 'error',
                'react/jsx-curly-brace-presence': 'error',
                'react/jsx-filename-extension': [
                  'error',
                  { extensions: options.extensions.resolvedReact.map((extension) => `.${extension}`) }
                ],
                'react/jsx-fragments': ['error', 'syntax'],
                'react/jsx-max-depth': ['error', { max: 3 }],
                'react/jsx-newline': 'error',
                'react/jsx-no-bind': 'error',
                'react/jsx-no-constructed-context-values': 'error',
                'react/jsx-no-leaked-render': 'error',
                'react/jsx-no-script-url': 'error',
                'react/jsx-no-target-blank': ['error', { warnOnSpreadAttributes: true }],
                'react/jsx-no-useless-fragment': 'error',
                'react/jsx-pascal-case': 'error',
                'react/jsx-sort-props': ['error', { ignoreCase: true }],
                'react/jsx-uses-react': 'off',
                'react/no-array-index-key': 'error',
                'react/no-danger': 'error',
                'react/no-multi-comp': 'error',
                'react/no-unstable-nested-components': 'error',
                'react/prop-types': 'off',
                'react/react-in-jsx-scope': 'off',
                'react/self-closing-comp': 'error',
                'react/void-dom-elements-no-children': 'error',
                'react-etc/prefer-usememo': 'error',
                'react-func/max-combined-conditions': ['error', 1],
                ...(!options.has.typescript || options.type !== 'full'
                  ? {
                      'react-hooks/exhaustive-deps': getReactExhaustiveDeps(options)
                    }
                  : {}),
                'react-hooks/rules-of-hooks': 'error',
                // TODO: not working with typescript?
                // 'react-hooks-order/sort': [
                //   'error',
                //   {
                //     groups: [
                //       'useState',
                //       'useReducer',
                //       'useDispatch',
                //       'useRef',
                //       'useContext',
                //       'useCallback',
                //       'useMemo',
                //       'useDeferredValue',
                //       'useId',
                //       'useEffect',
                //       'useLayoutEffect',
                //       'useTransition'
                //     ]
                //   }
                // ],
                'sort-react-dependency-arrays/sort': 'error'
              },
              settings: {
                react: {
                  version: 'detect'
                }
              }
            }
          ] as const)
        : []),
      ...(options.has.package.react && options.has.typescript && options.type === 'full'
        ? [
            {
              files: options.files.typescriptAtBase,
              plugins: ['ts-react-hooks'],
              rules: {
                'ts-react-hooks/exhaustive-deps': getReactExhaustiveDeps(options)
              }
            }
          ]
        : [])
    ]
  }
}

export { getReact }
