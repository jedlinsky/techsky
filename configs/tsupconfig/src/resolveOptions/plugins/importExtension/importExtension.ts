import { importRegexSimple } from './regex.js'
import type { ImportExtension } from './types.js'

const importExtension: ImportExtension = function () {
  return {
    name: 'importExtension',
    renderChunk: (code) => {
      if (!code.includes('import')) {
        return { code }
      }

      if (!importRegexSimple.test(code)) {
        return { code }
      }

      return {
        code: code.replace(importRegexSimple, (match, p1) => match.replace(`.${p1}`, '.js'))
      }
    }
  }
}

export { importExtension }
