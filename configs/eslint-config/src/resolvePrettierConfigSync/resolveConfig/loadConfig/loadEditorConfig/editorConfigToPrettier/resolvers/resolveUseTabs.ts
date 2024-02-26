import type { ResolveUseTabs } from './types.js'

const resolveUseTabs: ResolveUseTabs = function (config) {
  if (config.indent_style) {
    return config.indent_style === 'tab'
  }

  if (config.indent_size === 'tab') {
    return true
  }
}

export { resolveUseTabs }
