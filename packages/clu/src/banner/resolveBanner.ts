import { getDashedLine } from './getDashedLine.js'
import type { ResolveBanner } from './types.js'

const resolveBanner: ResolveBanner = function ({ header, indent, lineLength, subheader }) {
  if (!subheader) {
    return header
  }

  const dashedLine = getDashedLine({ indent, lineLength })

  return `${header}\n\n${dashedLine}\n\n${subheader}\n\n${dashedLine}\n`
}

export { resolveBanner }
