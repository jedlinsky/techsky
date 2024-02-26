import type { DeepReadonly } from 'ts-essentials'
import type { PackageJson as BasePackageJson } from 'type-fest/source/package-json.js'
import type { ResolvedPackageJson } from 'plugins/preparePublish/packageJson/types.js'
import type { OutDir, Silent } from 'resolveOptions/types.js'

type DistPackageJson = ResolvedPackageJson

type GetDistPackageJsonProps = {
  readonly outDir: OutDir
}

type GetDistPackageJson = (props: GetDistPackageJsonProps) => DistPackageJson

type PackageJsonStandard = Required<BasePackageJson.PackageJsonStandard>

type PackageJsonNodeJSStandard = Required<BasePackageJson.NodeJsStandard>

type PackageJsonNonStandardEntryPoints = Required<BasePackageJson.NonStandardEntryPoints>

type PackageJsonTypeScriptConfiguration = Required<BasePackageJson.TypeScriptConfiguration>

type PackageJsonWithoutExports = DeepReadonly<{
  readonly author?: PackageJsonStandard['author']
  readonly bin?: PackageJsonStandard['bin']
  readonly contributors?: PackageJsonStandard['contributors']
  readonly dependencies?: PackageJsonStandard['dependencies']
  readonly description?: PackageJsonStandard['description']
  readonly devDependencies?: PackageJsonStandard['devDependencies']
  readonly engines?: PackageJsonStandard['engines']
  readonly funding?: PackageJsonStandard['funding']
  readonly homepage?: PackageJsonStandard['homepage']
  readonly keywords?: PackageJsonStandard['keywords']
  readonly license?: PackageJsonStandard['license']
  readonly main?: PackageJsonStandard['main']
  readonly maintainers?: PackageJsonStandard['maintainers']
  readonly module?: PackageJsonNonStandardEntryPoints['module']
  readonly name?: PackageJsonStandard['name']
  readonly packageManager?: PackageJsonNodeJSStandard['packageManager']
  readonly peerDependencies?: PackageJsonStandard['peerDependencies']
  readonly private?: PackageJsonStandard['private']
  readonly publishConfig?: PackageJsonStandard['publishConfig']
  readonly repository?: PackageJsonStandard['repository']
  readonly scripts?: PackageJsonStandard['scripts']
  readonly sideEffects?: PackageJsonNonStandardEntryPoints['sideEffects']
  readonly type?: PackageJsonStandard['type']
  readonly types?: PackageJsonTypeScriptConfiguration['types']
  readonly version?: PackageJsonStandard['version']
}>

type PackageJson = PackageJsonWithoutExports & {
  readonly exports?: DeepReadonly<PackageJsonStandard['exports']>
}

type GetPackageJson = (path?: readonly string[]) => PackageJson

type RemoveDistPackageJsonProps = {
  readonly outDir: OutDir
  readonly silent: Silent
}

type RemoveDistPackageJson = (props: RemoveDistPackageJsonProps) => Promise<void>

export type {
  DistPackageJson,
  GetDistPackageJson,
  GetPackageJson,
  PackageJson,
  PackageJsonWithoutExports,
  RemoveDistPackageJson
}
