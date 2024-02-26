import { resolveAlways } from './resolveAlways/index.js'
import { resolveNever } from './resolveNever/index.js'
import { resolvePropsFromContext } from './resolvePropsFromContext.js'
import type { ResolveReport } from './types.js'

const resolveReport: ResolveReport = function ({ context }) {
  return function ({ filePath, name, node }) {
    const propsFromContext = resolvePropsFromContext({ context })

    if (propsFromContext === null) {
      return
    }

    switch (propsFromContext.required) {
      case 'always': {
        return resolveAlways({ context, filePath, name, node, propsFromContext })
      }

      case 'never': {
        return resolveNever({ context, name, node })
      }
    }
  }
}

export { resolveReport }
