import {
  resolveEndOfLine,
  resolvePrintWidth,
  resolveSingleQuote,
  resolveTabWidth,
  resolveUseTabs
} from './resolvers/index.js'
import { removeUnset } from './removeUnset.js'
import type { ResolvedConfig } from 'resolvePrettierConfigSync/resolveConfig/loadConfig/types.js'
import type { EditorConfigToPrettier } from './types.js'

const editorConfigToPrettier: EditorConfigToPrettier = function (editorConfig) {
  if (!editorConfig) {
    return null
  }

  const config = removeUnset(editorConfig)

  if (Object.keys(config).length === 0) {
    return null
  }

  const endOfLine = resolveEndOfLine(config)
  const printWidth = resolvePrintWidth(config)
  const singleQuote = resolveSingleQuote(config)
  const useTabs = resolveUseTabs(config)
  const tabWidth = resolveTabWidth(config, useTabs)

  const prettierConfig = {
    ...(endOfLine === undefined ? {} : { endOfLine }),
    ...(printWidth === undefined ? {} : { printWidth }),
    ...(singleQuote === undefined ? {} : { singleQuote }),
    ...(tabWidth === undefined ? {} : { tabWidth }),
    ...(useTabs === undefined ? {} : { useTabs })
  } satisfies ResolvedConfig

  return prettierConfig
}

export { editorConfigToPrettier }
