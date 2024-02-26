import { isPureObject } from './isPureObject.js'
import { walker } from './walker.js'
import type { MapObject, UnknownObject } from './types.js'

const mapObject: MapObject = function (object, callback) {
  if (!isPureObject(object)) {
    return object
  }

  return walker(object, (entry) => callback(entry)) as UnknownObject
}

export { mapObject }
