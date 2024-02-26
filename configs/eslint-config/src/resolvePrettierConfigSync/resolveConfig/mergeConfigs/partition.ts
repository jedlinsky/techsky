// https://github.com/prettier/prettier/blob/3.0.3/src/utils/partition.js
import type { Partition, PartitionReturn } from './types.js'

const partition: Partition = function (array, predicate) {
  return array.reduce<PartitionReturn>(
    (accumulator, value) => {
      const [withSlashes, withoutSlashes] = accumulator

      const isWithSlashes = predicate(value)

      return [
        [...withSlashes, ...(isWithSlashes ? [value] : [])],
        [...withoutSlashes, ...(isWithSlashes ? [] : [value])]
      ]
    },
    [[], []]
  )
}

export { partition }
