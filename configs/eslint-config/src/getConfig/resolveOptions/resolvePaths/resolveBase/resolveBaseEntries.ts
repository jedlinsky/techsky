import { readdirSync } from 'node:fs'
import { parse } from 'node:path'
import type { ResolveBaseEntries } from './types'

const resolveBaseEntries: ResolveBaseEntries = function ({ baseWithoutEntries }) {
  return readdirSync(baseWithoutEntries.absolute).map((entry) => parse(entry).name)
}

export { resolveBaseEntries }
