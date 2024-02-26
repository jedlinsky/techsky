import type { Options } from 'tsup'

type Plugin = Exclude<Options['plugins'], undefined>[number]

// eslint-disable-next-line functional/prefer-readonly-type
type Plugins = Plugin[]

export type { Plugin, Plugins }
