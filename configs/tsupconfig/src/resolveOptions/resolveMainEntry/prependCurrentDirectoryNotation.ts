import type { PrependCurrentDirectoryNotation } from './types.js'

const prependCurrentDirectoryNotation: PrependCurrentDirectoryNotation = function (mainEntry) {
  return mainEntry.startsWith('.') ? mainEntry : `./${mainEntry}`
}

export { prependCurrentDirectoryNotation }
