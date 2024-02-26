import { isPureObject } from './isPureObject.js'
import type { Walker } from './types.js'

const walker: Walker = function (object, callback) {
  if (Array.isArray(object)) {
    return object.map<unknown>((value) => {
      if (typeof value === 'object') {
        return walker(value, callback)
      }

      return value
    })
  }

  if (!isPureObject(object)) {
    return object
  }

  return Object.entries(object).reduce((accumulator, entry) => {
    const [key] = entry
    const resolvedCallback = callback(entry)

    const hasResolvedValue = resolvedCallback.length === 2

    const [resolvedKey, resolvedValue] = resolvedCallback

    return {
      ...accumulator,
      [resolvedKey]: hasResolvedValue ? resolvedValue : walker(object[key], callback)
    }
  }, {})
}

export { walker }
