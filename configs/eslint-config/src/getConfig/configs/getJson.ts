import { jsonOrder } from './utils'
import type { GetJson } from './types'

const getJson: GetJson = function (options) {
  return {
    ignorePatterns: options.files.packageLockJson,
    overrides: [
      {
        extends: ['plugin:jsonc/recommended-with-json'],
        files: options.files.json,
        parser: 'jsonc-eslint-parser',
        rules: {
          'jsonc/sort-keys': [
            'error',
            {
              order: jsonOrder,
              pathPattern: '.*'
            }
          ]
        }
      },
      {
        extends: ['plugin:jsonc/recommended-with-jsonc'],
        files: options.files.jsonc,
        parser: 'jsonc-eslint-parser',
        rules: {
          'jsonc/sort-keys': [
            'error',
            {
              order: jsonOrder,
              pathPattern: '.*'
            }
          ]
        }
      },
      {
        extends: ['plugin:jsonc/recommended-with-json'],
        files: options.files.packageJson,
        parser: 'jsonc-eslint-parser',
        rules: {
          'jsonc/sort-array-values': [
            'error',
            {
              order: {
                type: 'asc'
              },
              pathPattern: '^(contributors|funding|keywords|maintainers|workspaces)$'
            }
          ],
          'jsonc/sort-keys': [
            'error',
            {
              order: [
                'name',
                'description',
                'version',
                'keywords',
                'license',
                'homepage',
                'repository',
                'author',
                'contributors',
                'maintainers',
                'funding',
                'private',
                'publishConfig',
                'engines',
                'packageManager',
                'type',
                'bin',
                'exports',
                'main',
                'module',
                'types',
                'sideEffects',
                'scripts',
                'dependencies',
                'devDependencies',
                'peerDependencies'
              ],
              pathPattern: '^$'
            },
            {
              order: { type: 'asc' },
              pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$'
            },
            {
              order: { type: 'asc' },
              pathPattern: '^(author|bin|engines|funding|publishConfig|repository)$'
            },
            {
              order: { type: 'asc' },
              pathPattern: '^(contributors|funding|maintainers|)\\[.*\\]$'
            }
          ]
        }
      }
    ]
  }
}

export { getJson }
