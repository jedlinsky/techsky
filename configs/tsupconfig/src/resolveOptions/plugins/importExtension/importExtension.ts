import { importRegex } from './importRegex.js'
import type { ImportExtension } from './types.js'

const importExtension: ImportExtension = function () {
  return {
    name: 'importExtension',
    renderChunk: (code) => {
      if (!code.includes('import')) {
        return { code }
      }

      if (!importRegex.test(code)) {
        return { code }
      }

      return {
        code: code.replace(importRegex, (match, p1) => match.replace(`.${p1}`, '.js'))
      }
    }
  }
}

export { importExtension }
