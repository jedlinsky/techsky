import { resolveOutputPathWithoutExtension } from './resolveOutputPathWithoutExtension.js'
import type { ResolveOutputPath } from './types.js'

const resolveOutputPath: ResolveOutputPath = function ({ outDir, resolvedEntryPath, resolveExtension, srcDir }) {
  const replacedEntryWithOutDir = resolvedEntryPath.replace(srcDir, outDir)

  const segments = replacedEntryWithOutDir.split('/')
  const segmentsCount = segments.length - 1

  const segmentsReplacedExtension = segments.map((segment, index) => {
    if (index !== segmentsCount) {
      return segment
    }

    const resolvedExtension = resolveExtension()

    const withoutExtension = resolveOutputPathWithoutExtension({ resolvedExtension, segment })

    return `${withoutExtension}.${resolvedExtension}`
  })

  return segmentsReplacedExtension.join('/')
}

export { resolveOutputPath }
