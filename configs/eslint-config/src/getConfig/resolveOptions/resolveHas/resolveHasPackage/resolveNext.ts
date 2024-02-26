import type { ResolveNext } from './types'

const resolveNext: ResolveNext = function (hasPackage) {
  return {
    ...hasPackage,
    next: hasPackage.blitz || hasPackage.next
  }
}

export { resolveNext }
