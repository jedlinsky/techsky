import { ESLintUtils } from '@typescript-eslint/utils'
import { listenImports } from './listenImports/index.js'
import { resolveReport } from './resolveReport/index.js'
import type { MessageIds, Options } from './types.js'

const createRule = ESLintUtils.RuleCreator.withoutDocs

const importExtension = createRule<Options, MessageIds>({
  create: (context) => {
    if (!('project' in context.parserOptions)) {
      return {}
    }

    return listenImports(context, (imports) => imports.forEach(resolveReport({ context })))
  },
  defaultOptions: [
    {
      mapTSToJS: true,
      required: 'always'
    }
  ],
  meta: {
    fixable: 'code',
    messages: {
      forbidden: 'Forbidden file extension {{extension}}.',
      forbiddenSuffix: 'Forbidden file path suffix {{suffix}}.',
      required: 'Required file extension {{extension}}.',
      requiredPath: 'Required explicit file path with suffix {{suffix}}.'
    },
    schema: [
      {
        additionalProperties: false,
        properties: {
          mapTSToJS: {
            type: 'boolean'
          },
          required: {
            enum: ['always', 'never'],
            type: 'string'
          }
        },
        type: 'object'
      }
    ],
    type: 'problem'
  }
})

export { importExtension }
