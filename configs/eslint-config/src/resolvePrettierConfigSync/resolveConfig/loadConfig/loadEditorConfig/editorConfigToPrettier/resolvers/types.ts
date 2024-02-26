import type { EditorConfigWithoutUnset } from 'resolvePrettierConfigSync/resolveConfig/loadConfig/loadEditorConfig/editorConfigToPrettier/types.js'
import type { ResolvedConfig } from 'resolvePrettierConfigSync/resolveConfig/loadConfig/types.js'

type EndOfLineTypes = readonly string[]

type EndOfLine = Exclude<Exclude<ResolvedConfig, null>['endOfLine'], undefined>

type ResolveEndOfLine = (editorConfigWithoutUnset: EditorConfigWithoutUnset) => EndOfLine | undefined

type PrintWidth = number | undefined

type ResolvePrintWidth = (editorConfigWithoutUnset: EditorConfigWithoutUnset) => PrintWidth

type SingleQuote = boolean | undefined

type ResolveSingleQuote = (editorConfigWithoutUnset: EditorConfigWithoutUnset) => SingleQuote

type TabWidth = number | undefined

type ResolveTabWidth = (editorConfigWithoutUnset: EditorConfigWithoutUnset, useTabs: UseTabs) => TabWidth

type UseTabs = boolean | undefined

type ResolveUseTabs = (editorConfigWithoutUnset: EditorConfigWithoutUnset) => UseTabs

export type { EndOfLineTypes, ResolveEndOfLine, ResolvePrintWidth, ResolveSingleQuote, ResolveTabWidth, ResolveUseTabs }
