import type { Options } from 'resolveOptions/types.js'

type RemoveFirstDirectoryMatchInPathProps = {
  readonly directory: string
  readonly path: string
}

type RemoveFirstDirectoryMatchInPath = (props: RemoveFirstDirectoryMatchInPathProps) => string

type ReplacePathExtensionProps = {
  readonly extension: string
  readonly path: string
}

type ReplacePathExtension = (props: ReplacePathExtensionProps) => string

type ResolveDeclarationExtension = (path: string) => string

type ResolveOutputPathProps = {
  readonly extension?: string | undefined
  readonly path: string
  readonly srcDir: Options['srcDir']
}

type ResolveOutputPath = (props: ResolveOutputPathProps) => string

export type { RemoveFirstDirectoryMatchInPath, ReplacePathExtension, ResolveDeclarationExtension, ResolveOutputPath }
