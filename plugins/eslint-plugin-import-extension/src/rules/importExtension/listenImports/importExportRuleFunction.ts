import { resolveImport } from './resolveImport/index.js'
import { getIsModuleBuiltIn } from './getIsModuleBuiltIn.js'
import type { ImportExportRuleFunction } from './types.js'

const importExportRuleFunction: ImportExportRuleFunction = function ({ baseDirectory, importSet }) {
  return function ({ source: node, type }) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    if (type === 'ImportExpression' && node.type !== 'Literal') {
      return
    }

    if (node === null) {
      return
    }

    if (!('value' in node) || typeof node.value !== 'string') {
      return
    }

    const name = node.value

    const isModuleBuiltIn = getIsModuleBuiltIn(name)

    if (isModuleBuiltIn) {
      return
    }

    const resolvedImport = resolveImport({ baseDirectory, name, node })

    // eslint-disable-next-line functional/no-expression-statements
    importSet.add(resolvedImport)
  }
}

export { importExportRuleFunction }
