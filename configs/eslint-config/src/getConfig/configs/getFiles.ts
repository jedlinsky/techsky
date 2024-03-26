import type { GetFiles } from './types'

const getFiles: GetFiles = function (options) {
  const hasNextJSApp = options.has.nextJS && options.files.nextJSApp !== null
  const hasNextJSPages = options.has.nextJS && options.files.nextJSPages !== null

  return {
    overrides: [
      ...(hasNextJSApp
        ? ([
            {
              files: options.files.nextJSApp,
              plugins: ['unicorn'],
              rules: {
                'unicorn/filename-case': [
                  'error',
                  {
                    case: 'kebabCase',
                    ignore: ['^e2']
                  }
                ]
              }
            }
          ] as const)
        : []),
      ...(hasNextJSPages
        ? ([
            {
              files: options.files.nextJSPages,
              plugins: ['unicorn'],
              rules: {
                'unicorn/filename-case': [
                  'error',
                  {
                    case: 'kebabCase',
                    ignore: ['^e2']
                  }
                ]
              }
            }
          ] as const)
        : []),
      ...(options.has.package.react
        ? ([
            {
              ...(hasNextJSApp || hasNextJSPages
                ? {
                    excludedFiles: [
                      ...(hasNextJSApp ? options.files.nextJSApp : []),
                      ...(hasNextJSPages ? options.files.nextJSPages : [])
                    ]
                  }
                : {}),
              files: options.files.react,
              plugins: ['unicorn'],
              rules: {
                'unicorn/filename-case': [
                  'error',
                  {
                    case: 'pascalCase',
                    ignore: ['^e2']
                  }
                ]
              }
            }
          ] as const)
        : []),
      {
        excludedFiles: [
          ...options.files.meta,
          ...(hasNextJSApp ? options.files.nextJSApp : []),
          ...(hasNextJSPages ? options.files.nextJSPages : [])
        ],
        files: options.files.common,
        plugins: ['filenames-simple'],
        rules: {
          'filenames-simple/named-export': 'error'
        }
      },
      {
        files: options.files.allAtBase,
        plugins: ['filenames-simple'],
        rules: {
          'filenames-simple/extension': 'error'
        },
        settings: {
          'filenames-simple': {
            allowedExtensions: options.extensions.allAvailableWithJavaScript.map((extension) => `.${extension}`)
          }
        }
      }
    ]
  }
}

export { getFiles }
