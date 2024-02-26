import fs from 'node:fs'
import path from 'node:path'
import { markers } from './markers.js'
import type { MarkerExists } from './types.js'

const markerExists: MarkerExists = function (directory) {
  return markers.some((mark) => fs.existsSync(path.join(directory, mark)))
}

export { markerExists }
