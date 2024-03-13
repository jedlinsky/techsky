import { getIsEntryEmptyCheck } from './getIsEntryEmptyCheck.js'
import { resolveExports } from './resolveExports.js'
import { resolveModule } from './resolveModule.js'
import { resolveModuleExports } from './resolveModuleExports.js'
import { resolvePublishConfig } from './resolvePublishConfig.js'
import { resolveSideEffects } from './resolveSideEffects.js'
import type { ResolvePackageJson } from './types.js'

// eslint-disable-next-line max-lines-per-function
const resolvePackageJson: ResolvePackageJson = function ({
  augmentation,
  bundle,
  deleteEmptyEmittedFiles,
  dts,
  emptyEmittedFiles,
  format,
  includeCJSBundle,
  includeCJSBundleEntry,
  isBrowser,
  mainEntry,
  outDir,
  packageJson,
  srcDir
}) {
  const {
    author,
    bin,
    contributors,
    dependencies,
    description,
    engines,
    funding,
    homepage,
    keywords,
    license,
    maintainers,
    name,
    packageManager,
    peerDependencies,
    repository,
    scripts,
    version
  } = packageJson

  const hasDTS = dts && mainEntry !== null ? true : false

  const publishConfig = resolvePublishConfig({ packageJson })
  const resolvedExports = resolveExports({ bundle, mainEntry, packageJson, srcDir })
  const sideEffects = resolveSideEffects({ format, packageJson })

  const isEntryEmptyCheck = getIsEntryEmptyCheck({ deleteEmptyEmittedFiles, emptyEmittedFiles, outDir })

  const {
    exports: moduleExports,
    main,
    type,
    types
  } = resolveModule({
    format,
    hasDTS,
    includeCJSBundle,
    includeCJSBundleEntry,
    isBrowser,
    isEntryEmptyCheck,
    mainEntry,
    resolvedExports,
    srcDir
  })

  const exports = resolveModuleExports({ augmentation, moduleExports, srcDir })

  return {
    name: name as string,
    ...(description ? { description } : {}),
    ...(version ? { version } : {}),
    ...(keywords ? { keywords } : {}),
    ...(license ? { license } : {}),
    ...(homepage ? { homepage } : {}),
    ...(repository ? { repository } : {}),
    ...(author ? { author } : {}),
    ...(contributors ? { contributors } : {}),
    ...(maintainers ? { maintainers } : {}),
    ...(funding ? { funding } : {}),
    private: packageJson.private ?? false,
    ...(publishConfig ? { publishConfig } : {}),
    ...(engines ? { engines } : {}),
    ...(packageManager ? { packageManager } : {}),
    ...(type ? { type } : {}),
    ...(bin ? { bin } : {}),
    ...(exports ? { exports } : {}),
    ...(main ? { main } : {}),
    ...(types ? { types } : {}),
    ...(sideEffects ? { sideEffects } : {}),
    ...(scripts?.postinstall ? { scripts: { postinstall: scripts.postinstall } } : {}),
    ...(dependencies && Object.keys(dependencies).length > 0 ? { dependencies } : {}),
    ...(peerDependencies && Object.keys(peerDependencies).length > 0 ? { peerDependencies } : {})
  } as const
}

export { resolvePackageJson }
