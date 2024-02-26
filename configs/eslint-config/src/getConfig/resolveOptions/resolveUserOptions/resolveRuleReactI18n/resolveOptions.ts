import { defaultOptions } from './defaultOptions'
import { getResolveOptionsExcludeInclude } from './getResolveOptionsExcludeInclude'
import { resolveOptionsMode } from './resolveOptionsMode'
import type { ResolveOptions } from './types'

const resolveOptions: ResolveOptions = function ({
  message = defaultOptions.message,
  mode = defaultOptions.mode,
  shouldValidateTemplate = defaultOptions.shouldValidateTemplate,
  ...props
} = defaultOptions) {
  const resolveOptionsExcludeInclude = getResolveOptionsExcludeInclude(props)

  return {
    callees: resolveOptionsExcludeInclude('callees'),
    'class-properties': resolveOptionsExcludeInclude('classProperties'),
    'jsx-attributes': resolveOptionsExcludeInclude('jsxAttributes'),
    'jsx-components': resolveOptionsExcludeInclude('jsxComponents'),
    message,
    mode: resolveOptionsMode(mode),
    'object-properties': resolveOptionsExcludeInclude('objectProperties'),
    'should-validate-template': shouldValidateTemplate,
    words: resolveOptionsExcludeInclude('words')
  }
}

export { resolveOptions }
