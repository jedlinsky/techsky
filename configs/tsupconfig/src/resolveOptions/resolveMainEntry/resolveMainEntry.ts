import { resolveOutputPath } from 'resolvePath/resolveOutputPath.js'
import { prependCurrentDirectoryNotation } from './prependCurrentDirectoryNotation.js'
import { resolveBundle } from './resolveBundle.js'
import { resolveDefault } from './resolveDefault.js'
import { resolvePackageJson } from './resolvePackageJson.js'
import { resolveTSConfig } from './resolveTSConfig.js'
import { resolveUserEntry } from './resolveUserEntry.js'
import type { ResolveMainEntry } from './types.js'

const resolveMainEntry: ResolveMainEntry = function ({
  bundle,
  format,
  forOutput = true,
  packageJson,
  srcDir,
  tsConfig,
  userEntry
}) {
  if (userEntry === null) {
    return null
  }

  const mainEntry =
    resolveBundle({ bundle, srcDir }) ??
    resolvePackageJson({ format, packageJson }) ??
    resolveUserEntry({ srcDir, userEntry }) ??
    resolveTSConfig({ tsConfig }) ??
    resolveDefault({ srcDir })

  const path = prependCurrentDirectoryNotation(mainEntry)

  return forOutput ? resolveOutputPath({ path, srcDir }) : path
}

export { resolveMainEntry }
