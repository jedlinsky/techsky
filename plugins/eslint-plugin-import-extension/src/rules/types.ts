import type { TSESLint } from '@typescript-eslint/utils'
import type { importExtension } from './importExtension/index.js'

type Listener = TSESLint.RuleListener

type Rules = {
  readonly 'import-extension': typeof importExtension
}

export type { Listener, Rules }
