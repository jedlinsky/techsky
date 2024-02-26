import type { ResolveTabWidth } from './types.js'

const resolveTabWidth: ResolveTabWidth = function (config, useTabs) {
  if (useTabs && config.tab_width) {
    return config.tab_width
  }

  if (config.indent_style === 'space' && config.indent_size && config.indent_size !== 'tab') {
    return config.indent_size
  }

  if (config.tab_width !== undefined) {
    return config.tab_width
  }
}

export { resolveTabWidth }
