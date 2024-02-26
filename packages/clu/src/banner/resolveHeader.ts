import { green } from '@techsky/ansi'
import { figlet } from './figlet.js'
import type { ResolveHeader } from './types.js'

const resolveHeader: ResolveHeader = async function ({ indent, text }) {
  try {
    const result = await figlet(text, { font: 'Doh' })

    const lines = result.split('\n')

    const resolvedWhiteSpaces = `\n${lines
      .map((line) => (line.trim() ? `${indent}${line}` : ''))
      .filter(Boolean)
      .join('\n')}`

    const header = green(resolvedWhiteSpaces)

    const lineLength = lines[0]?.length ?? 0

    return {
      header,
      lineLength
    }
  } catch (error) {
    throw error
  }
}

export { resolveHeader }
