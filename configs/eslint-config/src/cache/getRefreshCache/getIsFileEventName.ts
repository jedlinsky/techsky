import type { EventName, FileEventName } from './types'

const getIsFileEventName = function (eventName: EventName): eventName is FileEventName {
  return eventName === 'add' || eventName === 'change' || eventName === 'unlink'
}

export { getIsFileEventName }
