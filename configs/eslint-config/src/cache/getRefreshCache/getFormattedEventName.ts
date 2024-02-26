import type { GetFormattedEventName } from './types'

const getFormattedEventName: GetFormattedEventName = function ({ eventName }) {
  switch (eventName) {
    case 'add': {
      return 'new file'
    }

    case 'addDir': {
      return 'new directory'
    }

    case 'change': {
      return 'changed file'
    }

    case 'unlink': {
      return 'deleted file'
    }

    case 'unlinkDir': {
      return 'deleted directory'
    }
  }
}

export { getFormattedEventName }
