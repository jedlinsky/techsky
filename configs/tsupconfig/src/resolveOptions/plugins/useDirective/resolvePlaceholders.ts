import { replacePlaceholderInFile } from './replacePlaceholderInFile.js'
import type { ResolvePlaceholders } from './types.js'

const resolvePlaceholders: ResolvePlaceholders = async function (placeholdersPaths) {
  const placeholdersPathsArray = Array.from(placeholdersPaths)
  const promises = placeholdersPathsArray.map(replacePlaceholderInFile)

  // eslint-disable-next-line functional/no-expression-statements
  await Promise.all(promises)
}

export { resolvePlaceholders }
