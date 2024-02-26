import type { GetMonorepo } from './types'

const getMonorepo: GetMonorepo = function (options) {
  return {
    overrides: [
      ...(options.isMonorepo
        ? ([
            {
              files: options.files.common,
              plugins: ['workspaces'],
              rules: {
                'workspaces/no-relative-imports': 'error',
                'workspaces/require-dependency': 'error'
              }
            }
          ] as const)
        : []),
      ...(options.isMonorepoRoot && options.isTurborepo
        ? ([
            {
              files: options.files.turboConfig,
              plugins: ['turbo'],
              rules: {
                'turbo/no-undeclared-env-vars': 'error'
              }
            }
          ] as const)
        : [])
    ]
  }
}

export { getMonorepo }
