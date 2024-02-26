import type { JSONObject } from './utils/types.js'

type Config = JSONObject | null

type GetConfig = () => Config

export type { GetConfig }
