import { getFilesPathsResolver } from './getFilesPathsResolver'
import { resolveIgnorePatternsPaths } from './resolveIgnorePatternsPaths'
import type { ResolveFiles } from './types'

const resolveFiles: ResolveFiles = function ({ extensions, gitIgnorePatterns, has, isMonorepoRoot, paths, rules }) {
  const filesPathsResolver = getFilesPathsResolver({ extensions, has, paths })

  return {
    all: filesPathsResolver({
      extensions: null,
      segments: ['**', '*']
    }),
    allAtBase: filesPathsResolver({
      extensions: null,
      segments: ['**', '*'],
      withBase: true
    }),
    common: filesPathsResolver({
      includeJavaScriptWhenTypeScript: true,
      includeReact: true,
      segments: ['**', '*']
    }),
    commonAtBase: filesPathsResolver({
      includeJavaScriptWhenTypeScript: true,
      includeReact: true,
      segments: ['**', '*'],
      withBase: true
    }),
    commonAtBaseResolved: filesPathsResolver({
      includeReact: true,
      segments: ['**', '*'],
      withBase: true
    }),
    commonJS: filesPathsResolver({
      extensions: extensions.commonJS,
      segments: ['**', '*']
    }),
    commonResolved: filesPathsResolver({
      includeReact: true,
      segments: ['**', '*']
    }),
    commonWithJson: filesPathsResolver({
      includeJavaScriptWhenTypeScript: true,
      includeJson: true,
      includeReact: true,
      segments: ['**', '*']
    }),
    declarations: filesPathsResolver({
      extensions: extensions.declarations,
      segments: ['**', '*']
    }),
    env: filesPathsResolver({
      paths: paths.env ? [paths.env.relative] : null,
      segments: ['**', '*'],
      withBase: true
    }),
    ignorePatterns: filesPathsResolver({
      extensions: null,
      paths: resolveIgnorePatternsPaths({ extensions, gitIgnorePatterns, isMonorepoRoot, paths }),
      segments: null
    }),
    javascript: filesPathsResolver({
      extensions: extensions.resolvedJavaScript,
      segments: ['**', '*']
    }),
    json: filesPathsResolver({
      extensions: extensions.json,
      segments: ['**', '*']
    }),
    jsonc: filesPathsResolver({
      extensions: extensions.jsonc,
      segments: ['**', '*']
    }),
    meta: filesPathsResolver({
      fileNames: ['index', 'types'],
      segments: ['**']
    }),
    nextJSApp: paths.nextJSApp
      ? filesPathsResolver({
          includeReact: true,
          segments: [paths.nextJSApp.relative, '**', '*'],
          withBase: true
        })
      : null,
    nextJSPages: paths.nextJSPages
      ? filesPathsResolver({
          includeReact: true,
          segments: [paths.nextJSPages.relative, '**', '*'],
          withBase: true
        })
      : null,
    nextJSPagesDirs: paths.nextJSPages
      ? filesPathsResolver({
          extensions: null,
          paths: [paths.nextJSPages.relativeWithRoot, paths.nextJSPages.relativeWithBaseWithRoot],
          segments: null
        })
      : null,
    noSecretsExclude: filesPathsResolver({
      extensions: null,
      paths: rules.noSecretsExcludeDirs ?? null,
      segments: ['**', '*']
    }),
    packageJson: filesPathsResolver({
      extensions: extensions.json,
      segments: ['package']
    }),
    packageLockJson: filesPathsResolver({
      extensions: extensions.json,
      segments: ['package-lock']
    }),
    react: filesPathsResolver({
      extensions: extensions.resolvedReact,
      segments: ['**', '*'],
      withBase: true
    }),
    reactTypeScript: filesPathsResolver({
      extensions: extensions.reactTypeScript,
      segments: ['**', '*']
    }),
    root: filesPathsResolver({
      extensions: null,
      prependCurrentDirectoryNotation: true,
      segments: ['*']
    }),
    standardTypeScript: filesPathsResolver({
      extensions: extensions.standardTypeScript,
      segments: ['**', '*']
    }),
    test: filesPathsResolver({
      includeReact: true,
      segments: ['**', '*.test']
    }),
    turboConfig: [paths.turboConfig.relative],
    typescript: filesPathsResolver({
      extensions: extensions.typescriptWithoutDeclarations,
      segments: ['**', '*']
    }),
    typescriptAtBase: filesPathsResolver({
      extensions: extensions.typescriptWithoutDeclarations,
      segments: ['**', '*'],
      withBase: true
    })
  }
}

export { resolveFiles }
