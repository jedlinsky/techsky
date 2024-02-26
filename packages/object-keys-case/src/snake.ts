import { snakeCase } from 'case-anything'
import { mapObjectKeys } from '@techsky/map-object/mapObjectKeys.js'

const snake = function <TObject extends Record<string, unknown>>(object: TObject) {
  return mapObjectKeys(object, (key) => (key.includes('_') ? key : snakeCase(key)))
}

export { snake }
