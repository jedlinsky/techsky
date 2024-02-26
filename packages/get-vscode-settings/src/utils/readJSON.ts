import { readFileSync } from 'node:fs'
import stripJSONComments from 'strip-json-comments'
import type { JSONValue, ReadJSON } from './types.js'

const readJSON: ReadJSON = function (path) {
  try {
    const content = readFileSync(path, 'utf8')

    try {
      const contentWithoutComments = stripJSONComments(content, { trailingCommas: true })

      return JSON.parse(contentWithoutComments) as JSONValue
    } catch (error) {
      console.error(`Unable to parse settings at: "${path}"`)

      console.log(error)

      return null
    }
  } catch {
    return null
  }
}

export { readJSON }
