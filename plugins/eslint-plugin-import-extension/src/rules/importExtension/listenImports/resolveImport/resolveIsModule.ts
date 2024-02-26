import type { ResolveIsModule } from './types.js'

const resolveIsModule: ResolveIsModule = function ({ name }) {
  return !/^(?:[./\\]|\w+:)/u.test(name)
}

export { resolveIsModule }
