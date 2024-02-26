import type { ResolveOutputPathWithoutExtension } from './types.js'

const resolveOutputPathWithoutExtension: ResolveOutputPathWithoutExtension = function ({ resolvedExtension, segment }) {
  if (resolvedExtension === 'd.ts') {
    return segment.split('').toReversed().join('').replace('st.d.', '').split('').toReversed().join('')
  }

  return segment.split('.').slice(0, -1).join('.')
}

export { resolveOutputPathWithoutExtension }
