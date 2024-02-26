import { green } from '@techsky/ansi'
import { orderValues } from './orderValues.js'
import type { FormatErrorValues } from './types.js'

const formatErrorValues: FormatErrorValues = function ({ conjunction, disjunction }) {
  const type = conjunction ? 'conjunction' : disjunction ? 'disjunction' : undefined
  const values = conjunction ?? disjunction ?? []

  if (!type || !values.length) {
    return
  }

  const listFormatter = new Intl.ListFormat('en-GB', { style: 'long', type })

  return listFormatter.format(orderValues(values).map((value) => `"${green(value)}"`))
}

export { formatErrorValues }
