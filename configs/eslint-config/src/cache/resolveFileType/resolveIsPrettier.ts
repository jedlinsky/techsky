import type { ResolveIsPrettier } from './types'

// .prettierrc
// .prettierrc.cjs
// .prettierrc.js
// .prettierrc.json
// .prettierrc.json5
// .prettierrc.toml
// .prettierrc.yaml
// .prettierrc.yml
// prettier.config.cjs
// prettier.config.js

const prettierRegEx = new RegExp(
  /^((\.prettierrc(\.(cjs|js|json|json5|toml|yaml|yml))?)|(prettier\.config\.(cjs|js)))$/
)

const resolveIsPrettier: ResolveIsPrettier = function ({ fileName }) {
  return prettierRegEx.test(fileName)
}

export { resolveIsPrettier }
