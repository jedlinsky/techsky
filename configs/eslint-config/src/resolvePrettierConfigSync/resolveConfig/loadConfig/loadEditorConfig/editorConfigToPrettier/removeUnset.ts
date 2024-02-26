import type { EditorConfigWithoutUnset, RemoveUnset } from './types.js'

const removeUnset: RemoveUnset = function (editorConfig) {
  return Object.entries(editorConfig).reduce<EditorConfigWithoutUnset>((accumulator, [key, value]) => {
    if (value === 'unset') {
      return accumulator
    }

    return {
      ...accumulator,
      [key]: value
    }
  }, {})
}

export { removeUnset }
