import type { ReportNever } from './types.js'

const reportNever: ReportNever = function ({ context, fixerValue, node }) {
  const { hasSuffix, message, range } = fixerValue

  context.report({
    data: { [hasSuffix ? 'suffix' : 'extension']: message },
    fix: (fixer) => {
      return fixer.removeRange(range)
    },
    messageId: hasSuffix ? 'forbiddenSuffix' : 'forbidden',
    node
  })
}

export { reportNever }
