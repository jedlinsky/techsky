import { dim, green, white } from '@techsky/ansi'
import { banner } from 'banner/index.js'
import { clear } from 'clear/clear.js'
import type { PrintBanner } from './types.js'

const printBanner: PrintBanner = async function ({ author, clearConsole = true, description, header, version }) {
  try {
    if (clearConsole) {
      clear(clearConsole)
    }

    console.log(await banner(header, dim(`${description} ${white(`v${version}`)} by ${green(author)}`)))
  } catch (error) {
    throw error
  }
}

export { printBanner }
