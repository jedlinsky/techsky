import { resolveImportsPatterns } from './utils'
import type { DefinedOptions } from 'getConfig'
import type { GetImports } from './types'

const getImports: GetImports = function (options) {
  const hasNextJS = options.has.nextJS && (options.files.nextJSApp !== null || options.files.nextJSPages !== null)

  return {
    overrides: [
      {
        files: options.files.commonAtBase,
        plugins: [
          // TODO: when updated, replace patch with original
          '@techsky/simple-import-sort',
          'import',
          ...(!hasNextJS && options.has.package.mui ? ['mui-path-imports'] : []),
          'no-relative-import-paths'
        ],
        rules: {
          ...(options.has.typescript
            ? // TODO: when released, update package source
              { 'import/consistent-type-specifier-style': ['error', 'prefer-top-level'] }
            : {}),
          'import/exports-last': 'error',
          'import/first': 'error',
          'import/group-exports': 'error',
          'import/newline-after-import': 'error',
          'import/no-absolute-path': 'error',
          'import/no-cycle': [
            'error',
            {
              maxDepth: 3
            }
          ],
          'import/no-duplicates': 'error',
          'import/no-namespace': 'error',
          'import/no-self-import': 'error',
          'import/no-unresolved': [
            'error',
            {
              commonjs: options.format === 'cjs',
              ...(options.has.typescript
                ? {
                    ignore: ['\\.js$']
                  }
                : {})
            }
          ],
          'import/no-useless-path-segments': 'error',
          ...(!hasNextJS && options.has.package.mui
            ? {
                'mui-path-imports/mui-path-imports': 'error'
              }
            : {}),
          '@techsky/simple-import-sort/exports': 'error',
          '@techsky/simple-import-sort/imports': [
            'error',
            {
              groups: [resolveImportsPatterns(options)]
            }
          ],
          'no-relative-import-paths/no-relative-import-paths': [
            'error',
            {
              allowSameFolder: true,
              rootDir: options.paths.base.relativeWithRootSystem
            }
          ]
        },
        ...(options.has.typescript
          ? {
              settings: {
                'import/extensions': options.extensions.resolvedTypeScriptWithoutDeclarations.map(
                  (extension) => `.${extension}`
                ),
                'import/external-module-folders': [
                  'node_modules',
                  'node_modules/@types',
                  ...(options.paths.workspaces
                    ? options.paths.workspaces.relative.filter((workspace) => workspace !== options.paths.root.relative)
                    : [])
                ],
                'import/parsers': {
                  '@typescript-eslint/parser': options.extensions.resolvedTypeScriptWithoutDeclarations.map(
                    (extension) => `.${extension}`
                  )
                },
                'import/resolver': {
                  typescript: {
                    alwaysTryTypes: true,
                    project: options.paths.tsConfig?.relativeWithRoot
                  }
                }
              }
            }
          : {})
      },
      ...(options.format === 'esm'
        ? ([
            {
              excludedFiles: [...options.files.commonJS, ...options.files.root],
              files: options.files.commonAtBase,
              rules: {
                'import/no-commonjs': 'error'
              }
            },
            {
              excludedFiles: [
                ...(options.has.nextJS && options.files.nextJSApp ? options.files.nextJSApp : []),
                ...(options.has.nextJS && options.files.nextJSPages ? options.files.nextJSPages : []),
                ...options.files.root
              ],
              files: options.files.common,
              rules: {
                'import/no-default-export': 'error'
              }
            }
          ] as const)
        : []),
      ...(options.has.rule.noRestrictedImports
        ? [
            {
              files: options.files.common,
              rules: {
                [options.has.typescript ? '@typescript-eslint/no-restricted-imports' : 'no-restricted-imports']: [
                  'error',
                  {
                    paths: (options as DefinedOptions).rules.noRestrictedImports
                  }
                ] as const
              }
            }
          ]
        : []),
      ...(options.has.package.lodash || options.has.rule.restrictImports
        ? ([
            {
              files: options.files.common,
              plugins: ['restrict-imports'],
              rules: {
                'restrict-imports/restrict-imports': [
                  'error',
                  {
                    ...(options.has.package.lodash
                      ? {
                          [options.format === 'esm' ? '^lodash(?!\\/fp\\/\\w+\\.js$)' : '^lodash(?!\\/fp\\/\\w+$)']: {
                            locations: ['.*'],
                            message:
                              options.format === 'esm'
                                ? "Use `import module from 'lodash/fp/module.js'` instead."
                                : "Use `import module from 'lodash/fp/module'` instead."
                          }
                        }
                      : {}),
                    ...(options.has.rule.restrictImports ? (options as DefinedOptions).rules.restrictImports : {})
                  }
                ]
              }
            }
          ] as const)
        : []),
      ...(options.has.package.mui
        ? ([
            {
              files: options.files.react,
              // TODO: when updated, replace patch with original
              plugins: ['@techsky/import-name'],
              rules: {
                '@techsky/import-name/default-import-name': ['error', { '@mui/icons-material/*': '*Icon' }]
              }
            }
          ] as const)
        : [])
    ]
  }
}

export { getImports }
