type UnknownObject = Record<string, unknown>

type Entry = readonly [key: string, value?: unknown]

type MapObjectCallback = (entry: Entry) => Entry

type MapObject = (object: Record<string, unknown>, callback: MapObjectCallback) => UnknownObject

type MapObjectKeysCallback = (key: string) => string

type MapObjectKeys = (object: Record<string, unknown>, callback: MapObjectKeysCallback) => UnknownObject

type MapObjectValuesCallback = (value: unknown) => string

type MapObjectValues = (object: Record<string, unknown>, callback: MapObjectValuesCallback) => UnknownObject

type WalkerCallback = (entry: Entry) => Entry

type Walker = (object: unknown, callback: WalkerCallback) => unknown

export type { MapObject, MapObjectKeys, MapObjectValues, UnknownObject, Walker }
