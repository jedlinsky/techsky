import {
  getComments,
  getCommon,
  getFiles,
  getFormatting,
  getImports,
  getJson,
  getMonorepo,
  getReact,
  getStylistic,
  getTypeScript,
  getTypeScriptFallback
} from './configs'
import type { GetConfigs } from './types'

const getConfigs: GetConfigs = function (options) {
  return {
    comments: getComments(options),
    common: getCommon(options),
    files: getFiles(options),
    formatting: getFormatting(options),
    imports: getImports(options),
    json: getJson(options),
    monorepo: getMonorepo(options),
    react: getReact(options),
    stylistic: getStylistic(options),
    typescript: getTypeScript(options),
    typescriptFallback: getTypeScriptFallback(options)
  }
}

export { getConfigs }
