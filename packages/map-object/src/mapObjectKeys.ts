import { isPureObject } from './isPureObject.js'
import { walker } from './walker.js'
import type { MapObjectKeys, UnknownObject } from './types.js'

const mapObjectKeys: MapObjectKeys = function (object, callback) {
  if (!isPureObject(object)) {
    return object
  }

  return walker(object, ([key]) => [callback(key)]) as UnknownObject
}

export { mapObjectKeys }
