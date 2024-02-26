import type { ResolveCopy } from './types.js'

const resolveCopy: ResolveCopy = function ({ augmentation, copy }) {
  if (augmentation === null && copy === null) {
    return null
  }

  const resolvedAugmentation = augmentation?.map(({ entry, outDir }) => ({
    augmentation: true,
    from: entry,
    to: outDir
  }))

  const copyWithAugmentation = copy?.map((entry) => ({ augmentation: false, ...entry }))

  const resolvedCopy = [...(copyWithAugmentation ?? []), ...(resolvedAugmentation ?? [])]

  if (resolvedCopy.length === 0) {
    return null
  }

  return resolvedCopy
}

export { resolveCopy }
