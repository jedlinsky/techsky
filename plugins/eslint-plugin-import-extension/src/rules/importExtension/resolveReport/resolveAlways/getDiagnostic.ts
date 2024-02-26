import { getPreEmitDiagnostics } from 'typescript'
import type { GetDiagnostic } from './types.js'

const allowedDiagnoticCodes = [2307, 2834, 2835]

const getDiagnostic: GetDiagnostic = function ({ name, path, program }) {
  const preEmitDiagnostics = getPreEmitDiagnostics(program, program.getSourceFile(path))

  const diagnostic = preEmitDiagnostics.find(({ code, file, length, start }) => {
    if (!file) {
      return false
    }

    if (!allowedDiagnoticCodes.includes(code)) {
      return false
    }

    if (length === undefined || start === undefined) {
      return false
    }

    const diagnosticImportName = file.getText().substring(start + 1, start + length - 1)

    return diagnosticImportName === name
  })

  return diagnostic ?? null
}

export { getDiagnostic }
