import type { TSESLint } from '@typescript-eslint/utils'
import type { Rules } from './rules/types.js'

type Plugin = Omit<TSESLint.Linter.Plugin, 'rules'> & {
  readonly rules: Rules
}

export type { Plugin }
