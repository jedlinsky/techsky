import type { PaddingLineBetweenStatements } from './types'

const paddingLineBetweenStatements: PaddingLineBetweenStatements = [
  { blankLine: 'always', next: '*', prev: 'directive' },
  { blankLine: 'always', next: 'directive', prev: '*' },
  { blankLine: 'never', next: 'directive', prev: 'directive' },
  { blankLine: 'always', next: '*', prev: 'multiline-expression' },
  { blankLine: 'always', next: 'multiline-expression', prev: '*' },
  { blankLine: 'always', next: '*', prev: 'multiline-const' },
  { blankLine: 'always', next: 'multiline-const', prev: '*' },
  { blankLine: 'always', next: 'block', prev: '*' },
  { blankLine: 'always', next: '*', prev: 'block' },
  { blankLine: 'always', next: 'block-like', prev: '*' },
  { blankLine: 'always', next: '*', prev: 'block-like' },
  { blankLine: 'always', next: 'return', prev: '*' },
  { blankLine: 'never', next: 'block-like', prev: ['case', 'default'] },
  { blankLine: 'always', next: ['case', 'default'], prev: 'block-like' }
]

export { paddingLineBetweenStatements }
