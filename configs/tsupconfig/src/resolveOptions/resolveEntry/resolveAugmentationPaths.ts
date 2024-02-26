import type { ResolveAugmentationPaths } from './types.js'

const resolveAugmentationPaths: ResolveAugmentationPaths = function ({ augmentation }) {
  if (!augmentation) {
    return null
  }

  return augmentation.map(({ entry }) => entry)
}

export { resolveAugmentationPaths }
