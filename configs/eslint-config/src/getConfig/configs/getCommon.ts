import type { GetCommon } from './types'

const getCommon: GetCommon = function (options) {
  return {
    env: {
      ...(options.has.package.react ? { browser: true } : {}),
      node: true
    },
    ignorePatterns: options.files.ignorePatterns,
    parserOptions: {
      ecmaVersion: 2024,
      sourceType: options.format === 'cjs' ? 'script' : 'module',
      ...(options.has.typescript ? { warnOnUnsupportedTypeScriptVersion: false } : {})
    },
    root: true
  }
}

export { getCommon }
