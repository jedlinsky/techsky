import { rules } from './rules/index.js'
import type { Plugin } from './types.js'

const plugin: Plugin = {
  rules
}

// @ts-expect-error: just for now
export = plugin
