import type { Plugin } from 'resolveOptions/plugins/types.js'

type BufferReplaceProps = {
  readonly buffer: Buffer
  readonly replace: Buffer | string
  readonly search: string
}

type BufferReplace = (props: BufferReplaceProps) => Buffer

type ReplacePlaceholderInFile = (path: string) => Promise<void>

// eslint-disable-next-line functional/prefer-readonly-type
type PlaceholdersPaths = Set<string>

// eslint-disable-next-line functional/prefer-immutable-types
type ResolvePlaceholders = (placeholdersPaths: PlaceholdersPaths) => Promise<void>

type UseDirective = () => Plugin

export type { BufferReplace, PlaceholdersPaths, Plugin, ReplacePlaceholderInFile, ResolvePlaceholders, UseDirective }
