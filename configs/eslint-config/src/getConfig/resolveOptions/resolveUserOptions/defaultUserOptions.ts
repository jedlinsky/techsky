import type { DefaultUserOptions } from './types'

const defaultUserOptions: DefaultUserOptions = {
  ignoreGitIgnored: true,
  mergePrettier: false,
  nextJSAppDir: './app',
  nextJSPagesDir: null,
  tsConfigPath: './tsconfig.json',
  type: 'full'
}

export { defaultUserOptions }
