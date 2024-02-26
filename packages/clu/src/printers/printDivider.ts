import { dim } from '@techsky/ansi'
import type { PrintDivider } from './types.js'

const printDivider: PrintDivider = function ({
  char = '■',
  lines = 1,
  width = process.stdout.getWindowSize()[0] || 40
} = {}) {
  const resolvedWidth = width * lines

  const chars = char.repeat(Math.ceil(resolvedWidth / char.length))

  const divider = chars.length > resolvedWidth ? chars.substring(0, resolvedWidth) : chars

  console.log(dim(divider))
}

export { printDivider }
