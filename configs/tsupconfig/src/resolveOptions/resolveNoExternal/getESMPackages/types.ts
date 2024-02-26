import type { NormalizedPackageJson, NormalizedReadResult } from 'read-package-up'
import type { PackageJson } from 'type-fest'
import type { OutDir } from 'resolveOptions/types.js'

type CJSBundleContent = string | null

type GetCJSBundleContentProps = {
  readonly cjsBundleEntryPath: CJSBundleEntryPath
}

type GetCJSBundleContent = (props: GetCJSBundleContentProps) => Promise<CJSBundleContent>

type CJSBundleContentDependencies = readonly string[] | null

type GetCJSBundleContentDependenciesProps = {
  readonly cjsBundleContent: CJSBundleContent
}

type GetCJSBundleContentDependencies = (props: GetCJSBundleContentDependenciesProps) => CJSBundleContentDependencies

type CJSBundleEntryPath = string | null

type GetCJSBundleEntryPathProps = {
  readonly outDir: OutDir
  readonly outputPath: string | undefined
}

type GetCJSBundleEntryPath = (props: GetCJSBundleEntryPathProps) => CJSBundleEntryPath

type Dependencies = readonly string[] | null

type GetDependenciesFromCJSBundleProps = {
  readonly cjsBundleEntryPath: CJSBundleEntryPath
}

type GetDependenciesFromCJSBundle = (props: GetDependenciesFromCJSBundleProps) => Promise<Dependencies>

type GetDependenciesFromRoot = () => Promise<Dependencies>

type ESMPackages = readonly string[]

type ESMPackagesType = 'cjsBundle' | 'root'

type GetESMPackagesProps = {
  readonly outDir: OutDir
  readonly outputPath?: string | undefined
  readonly type: ESMPackagesType
}

type GetESMPackages = (props: GetESMPackagesProps) => Promise<ESMPackages | null>

type GetPackageJsonProps = {
  readonly dependencyPath: DependencyPath
}

type GetPackageJson = (props: GetPackageJsonProps) => Promise<NormalizedReadResult['packageJson'] | null>

type Path = string | null

type GetPathFromFileURLProps = {
  readonly dependencyURL: string
}

type GetPathFromFileURL = (props: GetPathFromFileURLProps) => Path

type PackageJsonExportsObject = Exclude<
  NormalizedPackageJson['exports'],
  string | readonly (PackageJson.ExportConditions | string)[] | null | undefined
>

type DependencyPath = string | null

type ResolveDependencyPathProps = {
  readonly cjsBundleEntryPath: CJSBundleEntryPath
  readonly cwd: string
  readonly dependency: string
  readonly type: ESMPackagesType
}

type ResolveDependencyPath = (props: ResolveDependencyPathProps) => DependencyPath

type ResolveDependencyPathForCJSBundleProps = {
  readonly cjsBundleEntryPath: CJSBundleEntryPath
  readonly dependency: string
}

type ResolveDependencyPathForCJSBundle = (props: ResolveDependencyPathForCJSBundleProps) => DependencyPath

type ResolveDependencyPathForRootProps = {
  readonly cwd: string
  readonly dependency: string
}

type ResolveDependencyPathForRoot = (props: ResolveDependencyPathForRootProps) => DependencyPath

type HasCJS = boolean

type ResolveHasCJSProps = {
  readonly packageJson: NormalizedPackageJson | null
}

type ResolveHasCJS = (props: ResolveHasCJSProps) => HasCJS

export type {
  ESMPackages,
  GetCJSBundleContent,
  GetCJSBundleContentDependencies,
  GetCJSBundleEntryPath,
  GetDependenciesFromCJSBundle,
  GetDependenciesFromRoot,
  GetESMPackages,
  GetPackageJson,
  GetPathFromFileURL,
  PackageJsonExportsObject,
  ResolveDependencyPath,
  ResolveDependencyPathForCJSBundle,
  ResolveDependencyPathForRoot,
  ResolveHasCJS
}
