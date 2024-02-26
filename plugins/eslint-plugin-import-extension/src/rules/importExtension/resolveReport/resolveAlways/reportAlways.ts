import type { ReportAlways } from './types.js'

const reportAlways: ReportAlways = function ({ context, fixerValue, node }) {
  const { append, hasSuffix, message } = fixerValue

  context.report({
    data: { [hasSuffix ? 'suffix' : 'extension']: message },
    fix: (fixer) => {
      const index = node.range[1] - 1

      return fixer.insertTextBeforeRange([index, index], append)
    },
    messageId: hasSuffix ? 'requiredPath' : 'required',
    node
  })
}

export { reportAlways }
