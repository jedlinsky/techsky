import type { SearchPlaces } from './types.js'

const searchPlaces = [
  'package.json',
  '.prettierrc',
  '.prettierrc.json',
  '.prettierrc.yaml',
  '.prettierrc.yml',
  '.prettierrc.json5',
  '.prettierrc.js',
  '.prettierrc.cjs',
  'prettier.config.js',
  'prettier.config.cjs',
  '.prettierrc.toml'
] satisfies SearchPlaces

export { searchPlaces }
