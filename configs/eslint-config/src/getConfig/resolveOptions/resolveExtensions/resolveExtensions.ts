import type { Extensions, ResolveExtensions } from './types'

const resolveExtensions: ResolveExtensions = function (has) {
  const commonJS: Extensions['commonJS'] = ['cjs']
  const json: Extensions['json'] = ['json']
  const jsonc: Extensions['jsonc'] = ['jsonc']
  const reactJavaScript: Extensions['reactJavaScript'] = ['jsx']
  const reactTypeScript: Extensions['reactTypeScript'] = ['tsx']
  const resolvedReact: Extensions['resolvedReact'] = has.typescript ? reactTypeScript : reactJavaScript
  const standardJavaScript: Extensions['standardJavaScript'] = ['cjs', 'js', 'mjs']
  const standardTypeScript: Extensions['standardTypeScript'] = ['cts', 'mts', 'ts']
  const resolvedStandard: Extensions['resolvedStandard'] = has.typescript ? standardTypeScript : standardJavaScript
  const declarations: Extensions['declarations'] = ['d.cts', 'd.mts', 'd.ts']
  const javascript: Extensions['javascript'] = [...standardJavaScript, ...reactJavaScript]
  const typescript: Extensions['typescript'] = [...standardTypeScript, ...reactTypeScript, ...declarations]

  const typescriptWithoutDeclarations: Extensions['typescriptWithoutDeclarations'] = [
    ...standardTypeScript,
    ...reactTypeScript
  ]

  const resolvedJavaScript: Extensions['resolvedJavaScript'] = [
    ...standardJavaScript,
    ...(has.package.react ? reactJavaScript : [])
  ]

  const resolvedTypeScript: Extensions['resolvedTypeScript'] = [
    ...standardTypeScript,
    ...(has.package.react ? reactTypeScript : []),
    ...declarations
  ]

  const resolvedTypeScriptWithoutDeclarations: Extensions['resolvedTypeScriptWithoutDeclarations'] = [
    ...standardTypeScript,
    ...(has.package.react ? reactTypeScript : [])
  ]

  const resolvedCommon: Extensions['resolvedCommon'] = has.typescript ? resolvedTypeScript : resolvedJavaScript

  const resolvedCommonWithoutDeclarations: Extensions['resolvedCommonWithoutDeclarations'] = has.typescript
    ? resolvedTypeScriptWithoutDeclarations
    : resolvedJavaScript

  const all: Extensions['all'] = [...json, ...jsonc, ...javascript, ...typescript]
  const allAvailable: Extensions['allAvailable'] = [...json, ...jsonc, ...resolvedCommon]

  const allAvailableWithJavaScript: Extensions['allAvailableWithJavaScript'] = [
    ...json,
    ...jsonc,
    ...resolvedJavaScript,
    ...(has.typescript ? resolvedTypeScript : [])
  ]

  return {
    all,
    allAvailable,
    allAvailableWithJavaScript,
    commonJS,
    declarations,
    javascript,
    json,
    jsonc,
    reactJavaScript,
    reactTypeScript,
    resolvedCommon,
    resolvedCommonWithoutDeclarations,
    resolvedJavaScript,
    resolvedReact,
    resolvedStandard,
    resolvedTypeScript,
    resolvedTypeScriptWithoutDeclarations,
    standardJavaScript,
    standardTypeScript,
    typescript,
    typescriptWithoutDeclarations
  }
}

export { resolveExtensions }
