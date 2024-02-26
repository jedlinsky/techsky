import { posix, relative, sep } from 'node:path'
import { getCallSites } from '@techsky/callsites'
import type { GetESLintConfigPath } from './types'

const getESLintConfigPath: GetESLintConfigPath = function () {
  const callSites = getCallSites()

  const createConfigCallSiteIndex = callSites.findIndex((callSite) => callSite.getFunctionName() === 'createConfig')

  const eslintConfigCallSite = callSites[createConfigCallSiteIndex + 1]

  const eslintConfigFileName = eslintConfigCallSite?.getFileName()

  if (!eslintConfigCallSite || !eslintConfigFileName) {
    throw new Error('Unable to resolve ESLint config path.')
  }

  const relativePath = relative(process.cwd(), eslintConfigFileName)

  const posixPath = relativePath.split(sep).join(posix.sep)

  return `./${posixPath}`
}

export { getESLintConfigPath }
