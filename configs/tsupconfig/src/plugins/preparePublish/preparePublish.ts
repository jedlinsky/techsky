import { writePackageJson } from './packageJson/index.js'
import { getEmptyEmittedFiles } from './getEmptyEmittedFiles.js'
import type { PreparePublish } from './types.js'

const preparePublish: PreparePublish = function (props) {
  return {
    name: 'preparePublish',
    setup: (build) =>
      build.onEnd((buildResult) => {
        const emptyEmittedFiles = getEmptyEmittedFiles({ buildResult })

        return writePackageJson({ ...props, emptyEmittedFiles })
      })
  }
}

export { preparePublish }
