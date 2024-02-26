import { readJsonFile } from './readJsonFile'
import { resolveGitIgnore } from './resolveGitIgnore'
import { resolvePnpmWorkspace } from './resolvePnpmWorkspace'
import { resolvePrettier } from './resolvePrettier'
import { resolveTSConfig } from './resolveTSConfig'
import type { GetFileContent } from './types'

const getFileContent: GetFileContent = function ({ absolutePath, cwd, fileType }) {
  switch (fileType) {
    case 'gitIgnore': {
      return resolveGitIgnore({ absolutePath })
    }

    case 'packageJson': {
      return readJsonFile({ absolutePath })
    }

    case 'pnpmWorkspace': {
      return resolvePnpmWorkspace({ absolutePath })
    }

    case 'prettier': {
      return resolvePrettier({ absolutePath, cwd })
    }

    case 'tsConfig': {
      return resolveTSConfig({ absolutePath })
    }

    case 'turbo': {
      return readJsonFile({ absolutePath })
    }

    case 'unknown': {
      return null
    }
  }
}

export { getFileContent }
