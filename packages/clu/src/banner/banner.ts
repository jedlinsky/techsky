import { getIndent } from './getIndent.js'
import { resolveBanner } from './resolveBanner.js'
import { resolveHeader } from './resolveHeader.js'
import { resolveSubheader } from './resolveSubheader.js'
import type { Banner } from './types.js'

const banner: Banner = async function (headerText, subheaderText) {
  try {
    const indent = getIndent()

    const { header, lineLength } = await resolveHeader({ indent, text: headerText })

    const subheader = resolveSubheader({ indent, lineLength, text: subheaderText })

    return resolveBanner({ header, indent, lineLength, subheader })
  } catch (error) {
    throw error
  }
}

export { banner }
