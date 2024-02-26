import { resolvePathInternal } from './resolvePathInternal'
import type { GetPathResolverProps, GetPathResolverReturn, PathReturnType } from './types'

const getPathResolver = function <TGetPathResolverProps extends GetPathResolverProps>(
  { baseRelative, currentDirectoryNotation = false, cwd = process.cwd(), rootRelative } = {} as TGetPathResolverProps
): GetPathResolverReturn<TGetPathResolverProps> {
  return function (path) {
    return resolvePathInternal(path, {
      baseRelative,
      currentDirectoryNotation,
      cwd,
      rootRelative
    }) as PathReturnType<TGetPathResolverProps>
  }
}

// const a0 = getPathResolver()('')
// //    ^?

// const a00 = getPathResolver({})('')
// //    ^?

// const a1 = getPathResolver({ currentDirectoryNotation: false })('')
// //    ^?

// const a2 = getPathResolver({ currentDirectoryNotation: true })('')
// //    ^?

// const a3 = getPathResolver({ rootRelative: './packages/eslint-config' })('')
// //    ^?

// const a4 = getPathResolver({ rootRelative: './' })('')
// //    ^?

// const a5 = getPathResolver({ currentDirectoryNotation: false, rootRelative: 'packages/eslint-config' })('')
// //    ^?

// const a6 = getPathResolver({ currentDirectoryNotation: true, rootRelative: './packages/eslint-config' })('')
// //    ^?

// const a7 = getPathResolver({ currentDirectoryNotation: false, rootRelative: './' })('')
// //    ^?

// const a8 = getPathResolver({ currentDirectoryNotation: true, rootRelative: './' })('')
// //    ^?

// const a9 = getPathResolver({ currentDirectoryNotation: true, rootRelative: './' as string | undefined })('')
// //    ^?

// const a10 = getPathResolver({ baseRelative: './packages/eslint-config' })('')
// //    ^?

// const a11 = getPathResolver({ baseRelative: './' })('')
// //    ^?

// const a12 = getPathResolver({ baseRelative: 'packages/eslint-config', currentDirectoryNotation: false })('')
// //    ^?

// const a13 = getPathResolver({ baseRelative: './packages/eslint-config', currentDirectoryNotation: true })('')
// //    ^?

// const a14 = getPathResolver({ baseRelative: './', currentDirectoryNotation: false })('')
// //    ^?

// const a15 = getPathResolver({ baseRelative: './', currentDirectoryNotation: true })('')
// //    ^?

// const a16 = getPathResolver({ baseRelative: './' as string | undefined, currentDirectoryNotation: true })('')
// //    ^?

// const a17 = getPathResolver({ baseRelative: './packages/eslint-config', rootRelative: './packages/eslint-config' })('')
// //    ^?

// const a18 = getPathResolver({ baseRelative: './', rootRelative: './' })('')
// //    ^?

// const a19 = getPathResolver({
//   //  ^?
//   baseRelative: 'packages/eslint-config',
//   currentDirectoryNotation: false,
//   rootRelative: 'packages/eslint-config'
// })('')

// const a20 = getPathResolver({
//   //  ^?
//   baseRelative: './packages/eslint-config',
//   currentDirectoryNotation: true,
//   rootRelative: './packages/eslint-config'
// })('')

// const a21 = getPathResolver({ baseRelative: './', currentDirectoryNotation: false, rootRelative: './' })('')
// //    ^?

// const a22 = getPathResolver({ baseRelative: './', currentDirectoryNotation: true, rootRelative: './' })('')
// //    ^?

// const a23 = getPathResolver({
//   //  ^?
//   baseRelative: './' as string | undefined,
//   currentDirectoryNotation: true,
//   rootRelative: './' as string | undefined
// })('')

// const a24 = getPathResolver({
//   //  ^?
//   baseRelative: './',
//   currentDirectoryNotation: true,
//   rootRelative: './' as string | undefined
// })('')

// const a25 = getPathResolver({
//   //  ^?
//   baseRelative: './' as string | undefined,
//   currentDirectoryNotation: true,
//   rootRelative: './'
// })('')

export { getPathResolver }
