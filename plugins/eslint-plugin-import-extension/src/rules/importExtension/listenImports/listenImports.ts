import { importExportRuleFunction } from './importExportRuleFunction.js'
import { programExitRuleFunction } from './programExitRuleFunction.js'
import { resolveBaseDirectory } from './resolveBaseDirectory.js'
import type { Import } from './resolveImport/types.js'
import type { ListenImports } from './types.js'

const listenImports: ListenImports = function (context, callback) {
  const importSet = new Set<Import>()

  const baseDirectory = resolveBaseDirectory({ context })

  /* eslint-disable @typescript-eslint/naming-convention */
  return {
    ExportAllDeclaration: importExportRuleFunction({ baseDirectory, importSet }),
    ExportNamedDeclaration: importExportRuleFunction({ baseDirectory, importSet }),
    ImportDeclaration: importExportRuleFunction({ baseDirectory, importSet }),
    ImportExpression: importExportRuleFunction({ baseDirectory, importSet }),
    'Program:exit': programExitRuleFunction({ callback, importSet })
  }
  /* eslint-enable @typescript-eslint/naming-convention */
}

export { listenImports }
