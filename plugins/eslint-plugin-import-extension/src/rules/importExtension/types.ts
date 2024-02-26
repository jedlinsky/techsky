import type { TSESLint } from '@typescript-eslint/utils'

type MessageIds = 'forbidden' | 'forbiddenSuffix' | 'required' | 'requiredPath'

type Required = 'always' | 'never'

type MapTSToJS = boolean

type Options = readonly [
  {
    readonly mapTSToJS: MapTSToJS
    readonly required: Required
  }
]

type Context = TSESLint.RuleContext<MessageIds, Options>

export type { Context, MapTSToJS, MessageIds, Options, Required }
