import { readFile, writeFile } from 'node:fs/promises'
import { bufferReplace } from './bufferReplace.js'
import {
  placeholderUseClient,
  placeholderUseClientReplace,
  placeholderUseServer,
  placeholderUseServerReplace
} from './config.js'
import type { ReplacePlaceholderInFile } from './types.js'

const replacePlaceholderInFile: ReplacePlaceholderInFile = async function (path) {
  const file = await readFile(path)

  const bufferReplacedUseClient = bufferReplace({
    buffer: file,
    replace: placeholderUseClientReplace,
    search: placeholderUseClient
  })

  const bufferReplacedUseServer = bufferReplace({
    buffer: bufferReplacedUseClient,
    replace: placeholderUseServerReplace,
    search: placeholderUseServer
  })

  return writeFile(path, bufferReplacedUseServer)
}

export { replacePlaceholderInFile }
