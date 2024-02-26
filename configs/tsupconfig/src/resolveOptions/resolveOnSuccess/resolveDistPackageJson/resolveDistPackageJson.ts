import { getDistPackageJson } from 'packageJson/index.js'
import { getDeletedDeclarationFiles } from './getDeletedDeclarationFiles.js'
import { resolveEntries } from './resolveEntries.js'
import { writePackageJson } from './writePackageJson.js'
import type { ResolveDistPackageJson } from './types.js'

const resolveDistPackageJson: ResolveDistPackageJson = async function ({ emptyOutputs, outDir }) {
  if (emptyOutputs.files === null) {
    return
  }

  const deletedDeclarationFiles = getDeletedDeclarationFiles({ files: emptyOutputs.files, outDir })

  if (deletedDeclarationFiles === null) {
    return
  }

  const distPackageJson = getDistPackageJson({ outDir })

  const resolvedDistPackageJson = resolveEntries({ deletedDeclarationFiles, distPackageJson })

  // eslint-disable-next-line functional/no-expression-statements
  await writePackageJson({ outDir, resolvedDistPackageJson })
}

export { resolveDistPackageJson }
