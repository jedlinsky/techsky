import { isPureObject } from './isPureObject.js'
import { walker } from './walker.js'
import type { MapObjectValues, UnknownObject } from './types.js'

const mapObjectValues: MapObjectValues = function (object, callback) {
  if (!isPureObject(object)) {
    return object
  }

  return walker(object, ([key, value]) => [key, callback(value)]) as UnknownObject
}

export { mapObjectValues }
