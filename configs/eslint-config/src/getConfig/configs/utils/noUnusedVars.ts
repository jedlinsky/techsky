import type { NoUnusedVars } from './types'

const noUnusedVars: NoUnusedVars = {
  argsIgnorePattern: '^_',
  caughtErrors: 'all',
  destructuredArrayIgnorePattern: '^_',
  ignoreRestSiblings: true
}

export { noUnusedVars }
