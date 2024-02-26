import { resolveAbsolute } from './resolveAbsolute'
import { resolveAbsoluteWithBase } from './resolveAbsoluteWithBase'
import { resolveBase } from './resolveBase'
import { resolveBaseRoot } from './resolveBaseRoot'
import { resolveCurrentDirectoryNotation } from './resolveCurrentDirectoryNotation'
import { resolveRoot } from './resolveRoot'
import { resolveSystem } from './resolveSystem'
import type { ResolvePathInternal } from './types'

const resolvePathInternal: ResolvePathInternal = function (
  path,
  { baseRelative, currentDirectoryNotation, cwd, rootRelative }
) {
  const relative = resolveCurrentDirectoryNotation({ currentDirectoryNotation, path })
  const relativeSystem = resolveSystem({ relative })

  const relativeEqualsBase = relative === './' || baseRelative === relative

  const relativeWithBase = resolveBase({ baseRelative, currentDirectoryNotation, relative, relativeEqualsBase })
  const relativeWithBaseSystem = relativeWithBase ? resolveSystem({ relative: relativeWithBase }) : null

  const relativeWithBaseWithRoot = resolveBaseRoot({
    baseRelative,
    currentDirectoryNotation,
    relative,
    relativeEqualsBase,
    rootRelative
  })

  const relativeWithBaseWithRootSystem = relativeWithBaseWithRoot
    ? resolveSystem({ relative: relativeWithBaseWithRoot })
    : null

  const relativeWithRoot = resolveRoot({ currentDirectoryNotation, relative, rootRelative })
  const relativeWithRootSystem = relativeWithRoot ? resolveSystem({ relative: relativeWithRoot }) : null

  const absolute = resolveAbsolute({ cwd, relative, rootRelative })
  const absoluteWithBase = resolveAbsoluteWithBase({ baseRelative, cwd, relative, relativeEqualsBase, rootRelative })

  return {
    absolute,
    ...(absoluteWithBase ? { absoluteWithBase } : {}),
    relative,
    relativeSystem,
    ...(relativeWithBase ? { relativeWithBase } : {}),
    ...(relativeWithBaseSystem ? { relativeWithBaseSystem } : {}),
    ...(relativeWithBaseWithRoot ? { relativeWithBaseWithRoot } : {}),
    ...(relativeWithBaseWithRootSystem ? { relativeWithBaseWithRootSystem } : {}),
    ...(relativeWithRoot ? { relativeWithRoot } : {}),
    ...(relativeWithRootSystem ? { relativeWithRootSystem } : {})
  }
}

export { resolvePathInternal }
