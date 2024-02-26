type MergeConfigsProps = {
  readonly userSettings: JSONValue
  readonly workspaceSettings: JSONValue
}

type MergeConfigs = (props: MergeConfigsProps) => JSONValue

type JSONPrimitives = boolean | number | string | null

type JSONArray = readonly JSONValue[]

type JSONObject = {
  readonly [x: string]: JSONValue
}

type JSONValue = JSONArray | JSONObject | JSONPrimitives

type ReadJSON = (path: string) => JSONValue | null

export type { JSONObject, JSONValue, MergeConfigs, ReadJSON }
