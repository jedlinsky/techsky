import type { ResolveRange } from './types.js'

const resolveRange: ResolveRange = function ({ name, node, remove }) {
  const index = name.lastIndexOf(remove)
  const start = node.range[0] + 1 + index
  const end = start + remove.length

  return [start, end]
}

export { resolveRange }
