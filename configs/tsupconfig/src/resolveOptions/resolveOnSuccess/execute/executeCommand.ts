import { execa } from 'execa'
import type { ExecuteCommand } from './types.js'

const executeCommand: ExecuteCommand = async function (command) {
  const subProcess = await execa(command, { shell: true, stdio: 'inherit' })

  if (subProcess.exitCode !== 0) {
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    process.exitCode = subProcess.exitCode
  }
}

export { executeCommand }
