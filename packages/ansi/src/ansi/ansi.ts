import { ansiStringToObject } from './ansiStringToObject.js'
import { resolveAnsiObjectEscapedCodes } from './resolveAnsiObjectEscapedCodes.js'
import { resolveRestore } from './resolveRestore.js'
import type { Ansi } from './types.js'

const ansi: Ansi = function (text, props) {
  const ansiObject = typeof props === 'string' ? ansiStringToObject(props) : props

  const ansiObjectEscapedCodes = resolveAnsiObjectEscapedCodes(ansiObject)

  const bg = ansiObjectEscapedCodes.bg?.join('') ?? ''
  const color = ansiObjectEscapedCodes.color?.join('') ?? ''
  const reset = ansiObjectEscapedCodes.reset?.join('') ?? ''
  const style = ansiObjectEscapedCodes.style?.join('') ?? ''

  const restore = resolveRestore(ansiObject)

  return `${reset}${bg}${color}${style}${text}${restore}`
}

export { ansi }
