import { dim } from '@techsky/ansi'
import type { GetDashedLine } from './types.js'

const getDashedLine: GetDashedLine = function ({ indent, lineLength }) {
  return dim(`${indent}${'-'.repeat(lineLength)}`)
}

export { getDashedLine }
