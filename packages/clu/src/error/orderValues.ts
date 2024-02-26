import type { OrderValues } from './types.js'

const orderValues: OrderValues = function (values) {
  return [...values].sort((itemA, itemB) => itemA.localeCompare(itemB, 'en'))
}

export { orderValues }
