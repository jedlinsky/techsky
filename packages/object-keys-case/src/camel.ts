import { camelCase } from 'case-anything'
import { mapObjectKeys } from '@techsky/map-object/mapObjectKeys.js'

const camel = function <TObject extends Record<string, unknown>>(object: TObject) {
  return mapObjectKeys(object, camelCase)
}

export { camel }
