import { promisify } from 'node:util'
import figletCallback from 'figlet'
import type { BannerOptions, Figlet } from './types.js'

const figletPromisified = promisify<string, BannerOptions, string | undefined>(figletCallback.text)

const figlet: Figlet = async function (text, options) {
  try {
    const result = await figletPromisified(text, options)

    if (!result) {
      throw new Error('Figlet error.')
    }

    return result
  } catch (error) {
    throw error
  }
}

export { figlet }
