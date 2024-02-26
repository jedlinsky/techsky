import { homedir, platform } from 'node:os'
import { resolve } from 'node:path'
import type { GetUserSettingsPath } from './types.js'

const codePathSegments = ['Code', 'User', 'settings.json'] as const

const getUserSettingsPath: GetUserSettingsPath = function () {
  const resolvedPlatform = platform()

  switch (resolvedPlatform) {
    case 'darwin': {
      return resolve(homedir(), 'Library', 'Application Support', ...codePathSegments)
    }

    case 'win32': {
      // eslint-disable-next-line n/no-process-env
      return resolve(process.env['APPDATA'] as string, ...codePathSegments)
    }

    default: {
      return resolve(homedir(), '.config', ...codePathSegments)
    }
  }
}

export { getUserSettingsPath }
