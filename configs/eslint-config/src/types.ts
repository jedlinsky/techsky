import type { Config, UserOptions } from './getConfig'

type CreateConfig = (userOptions?: UserOptions) => Config

type IsExtension = boolean

type GetIsExtension = () => IsExtension

export type { CreateConfig, GetIsExtension }
