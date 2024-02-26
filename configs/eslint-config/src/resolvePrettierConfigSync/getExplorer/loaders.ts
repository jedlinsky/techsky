import parseToml from '@iarna/toml/parse-string.js'
import parseJson5 from 'json5/lib/parse.js'
import type { Loaders } from './types.js'

const loaders = {
  '.json5': (filePath, content) => {
    try {
      return parseJson5<Record<string, unknown>>(content)
    } catch (error) {
      if (error instanceof Error) {
        // eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
        error.message = `JSON5 Error in ${filePath}:\n${error.message}`
      }

      throw error
    }
  },
  '.toml': (filePath, content) => {
    try {
      return parseToml(content)
    } catch (error) {
      if (error instanceof Error) {
        // eslint-disable-next-line functional/immutable-data, functional/no-expression-statements
        error.message = `TOML Error in ${filePath}:\n${error.message}`
      }

      throw error
    }
  }
} satisfies Loaders

export { loaders }
