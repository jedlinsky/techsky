type FindProjectRoot = (directory: string) => string

type MarkerExists = (directory: string) => boolean

type Markers = readonly string[]

type ResolveRoot = (filePath: string) => string

export type { FindProjectRoot, MarkerExists, Markers, ResolveRoot }
