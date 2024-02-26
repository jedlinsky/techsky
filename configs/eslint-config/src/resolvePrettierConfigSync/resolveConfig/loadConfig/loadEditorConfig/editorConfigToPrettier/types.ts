import type { Props } from 'editorconfig'
import type { ReadonlyDeep } from 'type-fest'
import type { ResolvedConfig } from 'resolvePrettierConfigSync/resolveConfig/loadConfig/types.js'

/* eslint-disable @typescript-eslint/naming-convention */
type ExtendedEditorConfig = {
  readonly max_line_length?: number | 'off' | 'unset'
  readonly quote_type?: 'auto' | 'double' | 'single' | 'unset'
}
/* eslint-enable @typescript-eslint/naming-convention */

type EditorConfig = ReadonlyDeep<ExtendedEditorConfig & Props>

type EditorConfigToPrettier = (editorConfig: EditorConfig | null) => ResolvedConfig

type EditorConfigWithoutUnset = {
  readonly [TKey in keyof EditorConfig]: Exclude<EditorConfig[TKey], 'unset'>
}

type RemoveUnset = (editorConfig: EditorConfig) => EditorConfigWithoutUnset

export type { EditorConfigToPrettier, EditorConfigWithoutUnset, RemoveUnset }
