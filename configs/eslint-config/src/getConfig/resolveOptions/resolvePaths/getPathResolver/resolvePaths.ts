import { getPathResolver } from './getPathResolver'
import type { Paths, ResolvedPaths, ResolvePathsProps } from './types'

const resolvePaths = function <TResolvePathsProps extends ResolvePathsProps>({
  baseRelative,
  currentDirectoryNotation = false,
  cwd,
  paths,
  rootRelative
}: TResolvePathsProps): ResolvedPaths<TResolvePathsProps> {
  const resolvePath = getPathResolver({ baseRelative, currentDirectoryNotation, cwd, rootRelative })

  const hasBase = baseRelative !== undefined
  const hasRoot = rootRelative !== undefined

  const hasBaseRoot = hasBase && hasRoot

  return paths.reduce<Paths>(
    (accumulator, path) => {
      const {
        absolute,
        absoluteWithBase,
        relative,
        relativeSystem,
        relativeWithBase,
        relativeWithBaseSystem,
        relativeWithBaseWithRoot,
        relativeWithBaseWithRootSystem,
        relativeWithRoot,
        relativeWithRootSystem
      } = resolvePath(path)

      const hasAccumulatorBase =
        accumulator.absoluteWithBase && accumulator.relativeWithBase && accumulator.relativeWithBaseSystem

      const hasAccumulatorBaseRoot = accumulator.relativeWithBaseWithRoot && accumulator.relativeWithBaseWithRootSystem

      const hasAccumulatorRoot = accumulator.relativeWithRoot && accumulator.relativeWithRootSystem

      const hasResolvedPathBase =
        absoluteWithBase !== undefined && relativeWithBase !== undefined && relativeWithBaseSystem !== undefined

      const hasResolvedPathBaseRoot =
        relativeWithBaseWithRoot !== undefined && relativeWithBaseWithRootSystem !== undefined

      const hasResolvedPathRoot = relativeWithRoot !== undefined && relativeWithRootSystem !== undefined

      const hasBase = hasAccumulatorBase && hasResolvedPathBase
      const hasBaseRoot = hasAccumulatorBaseRoot && hasResolvedPathBaseRoot
      const hasRoot = hasAccumulatorRoot && hasResolvedPathRoot

      return {
        absolute: [...accumulator.absolute, absolute],
        relative: [...accumulator.relative, relative],
        relativeSystem: [...accumulator.relativeSystem, relativeSystem],
        ...(hasBase
          ? {
              absoluteWithBase: [...accumulator.absoluteWithBase, absoluteWithBase],
              relativeWithBase: [...accumulator.relativeWithBase, relativeWithBase],
              relativeWithBaseSystem: [...accumulator.relativeWithBaseSystem, relativeWithBaseSystem]
            }
          : {}),
        ...(hasBaseRoot
          ? {
              relativeWithBaseWithRoot: [...accumulator.relativeWithBaseWithRoot, relativeWithBaseWithRoot],
              relativeWithBaseWithRootSystem: [
                ...accumulator.relativeWithBaseWithRootSystem,
                relativeWithBaseWithRootSystem
              ]
            }
          : {}),
        ...(hasRoot
          ? {
              relativeWithRoot: [...accumulator.relativeWithRoot, relativeWithRoot],
              relativeWithRootSystem: [...accumulator.relativeWithRootSystem, relativeWithRootSystem]
            }
          : {})
      }
    },
    {
      absolute: [],
      relative: [],
      relativeSystem: [],
      ...(hasBase
        ? {
            absoluteWithBase: [],
            relativeWithBase: [],
            relativeWithBaseSystem: []
          }
        : {}),
      ...(hasBaseRoot
        ? {
            relativeWithBaseWithRoot: [],
            relativeWithBaseWithRootSystem: []
          }
        : {}),
      ...(hasRoot
        ? {
            relativeWithRoot: [],
            relativeWithRootSystem: []
          }
        : {})
    }
  ) as ResolvedPaths<TResolvePathsProps>
}

// const a0 = resolvePaths({ paths: [] })
// //    ^?

// const a1 = resolvePaths({ currentDirectoryNotation: false, paths: [] })
// //    ^?

// const a2 = resolvePaths({ currentDirectoryNotation: true, paths: [] })
// //    ^?

// const a3 = resolvePaths({ paths: [], rootRelative: './packages/eslint-config' })
// //    ^?

// const a4 = resolvePaths({ paths: [], rootRelative: './' })
// //    ^?

// const a5 = resolvePaths({ currentDirectoryNotation: false, paths: [], rootRelative: 'packages/eslint-config' })
// //    ^?

// const a6 = resolvePaths({ currentDirectoryNotation: true, paths: [], rootRelative: './packages/eslint-config' })
// //    ^?

// const a7 = resolvePaths({ currentDirectoryNotation: false, paths: [], rootRelative: './' })
// //    ^?

// const a8 = resolvePaths({ currentDirectoryNotation: true, paths: [], rootRelative: './' })
// //    ^?

// const a9 = resolvePaths({ currentDirectoryNotation: true, paths: [], rootRelative: './' as string | undefined })
// //    ^?

export { resolvePaths }
