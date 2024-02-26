import { getPathResolver } from './getPathResolver'
import type { GetResolvePath } from './types'

const getResolvePath: GetResolvePath = function ({ baseRelative, cwd, rootRelative }) {
  return {
    common: getPathResolver({ cwd }),
    withBaseAndRoot: getPathResolver({ baseRelative, cwd, rootRelative }),
    withRoot: getPathResolver({ cwd, rootRelative })
  }
}

export { getResolvePath }
