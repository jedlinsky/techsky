type Inspect = (content: unknown, depth?: number | null) => void

type Log = (...args: readonly unknown[]) => void

export type { Inspect, Log }
