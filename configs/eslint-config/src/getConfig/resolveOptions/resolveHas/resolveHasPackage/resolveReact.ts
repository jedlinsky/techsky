import type { ResolveReact } from './types'

const resolveReact: ResolveReact = function (hasPackage) {
  return {
    ...hasPackage,
    react: hasPackage.next || hasPackage.react
  }
}

export { resolveReact }
