import type { ResolveHasOption } from './types'

const resolveHasOption: ResolveHasOption = function (userOptions) {
  return {
    baseUrl: 'baseUrl' in userOptions,
    envPath: 'envPath' in userOptions,
    extend: 'extend' in userOptions,
    ignoreGitIgnored: 'ignoreGitIgnored' in userOptions,
    mergePrettier: 'mergePrettier' in userOptions,
    nextJSAppDir: 'nextJSAppDir' in userOptions,
    nextJSPagesDir: 'nextJSPagesDir' in userOptions,
    npmScope: 'npmScope' in userOptions,
    prettier: 'prettier' in userOptions,
    rules: 'rules' in userOptions,
    tsConfigPath: 'tsConfigPath' in userOptions,
    type: 'type' in userOptions
  }
}

export { resolveHasOption }
