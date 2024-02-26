import type { ResolvePublishConfig } from './types.js'

const resolvePublishConfig: ResolvePublishConfig = function ({ packageJson }) {
  if (!packageJson.publishConfig) {
    return null
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { directory, executableFiles, linkDirectory, ...publishConfig } = packageJson.publishConfig

  if (Object.keys(publishConfig).length === 0) {
    return null
  }

  return publishConfig
}

export { resolvePublishConfig }
