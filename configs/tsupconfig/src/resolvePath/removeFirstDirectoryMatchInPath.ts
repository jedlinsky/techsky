import type { RemoveFirstDirectoryMatchInPath } from './types.js'

const removeFirstDirectoryMatchInPath: RemoveFirstDirectoryMatchInPath = function ({ directory, path }) {
  const regex = new RegExp(String.raw`(?<=^((\.\/)|(\/)|))${directory}\/?`)

  const replaced = path.replace(regex, '')

  if (path === replaced) {
    return path
  }

  return replaced.startsWith('./') || replaced.startsWith('/') ? replaced : `./${replaced}`
}

export { removeFirstDirectoryMatchInPath }
