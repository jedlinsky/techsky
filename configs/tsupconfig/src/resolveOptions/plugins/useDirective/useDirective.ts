import { placeholderUseClient, placeholderUseServer, useClientRegExp, useServerRegExp } from './config.js'
import { resolvePlaceholders } from './resolvePlaceholders.js'
import type { PlaceholdersPaths, Plugin, UseDirective } from './types.js'

const useDirective: UseDirective = function () {
  const placeholdersPaths = new Set() satisfies PlaceholdersPaths

  return {
    buildEnd: () => resolvePlaceholders(placeholdersPaths),
    name: 'useDirective',
    renderChunk: (chunk, { path }) => {
      if (useClientRegExp.test(chunk)) {
        // eslint-disable-next-line functional/no-expression-statements
        placeholdersPaths.add(path)

        const chunkWithoutUseClient = chunk.replace(useClientRegExp, '')

        return { code: `${placeholderUseClient}\n${chunkWithoutUseClient}` }
      }

      if (useServerRegExp.test(chunk)) {
        // eslint-disable-next-line functional/no-expression-statements
        placeholdersPaths.add(path)

        const chunkWithoutUseServer = chunk.replace(useServerRegExp, '')

        return { code: `${placeholderUseServer}\n${chunkWithoutUseServer}` }
      }
    }
  } satisfies Plugin
}

export { useDirective }
