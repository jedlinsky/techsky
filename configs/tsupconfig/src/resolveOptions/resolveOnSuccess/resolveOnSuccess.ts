import { copyOnSuccess } from 'plugins/index.js'
import { replaceTSCAliasPaths } from 'tscAliasPaths/index.js'
import { deleteEmptyOutputs } from './deleteEmptyOutputs/index.js'
import { handleDTS } from './dts/index.js'
import { execute } from './execute/index.js'
import { resolveDistPackageJson } from './resolveDistPackageJson/index.js'
import type { ResolveOnSuccess } from './types.js'

const resolveOnSuccess: ResolveOnSuccess = function ({
  augmentation,
  bundle,
  copy,
  deleteEmptyEmittedFiles,
  dts,
  dtsTimeout,
  executeOnWatch,
  includeDistPackageJson,
  mainEntry,
  onSuccess,
  outDir,
  silent,
  watch
}) {
  return async function () {
    // eslint-disable-next-line functional/no-expression-statements
    await handleDTS({ dts, dtsTimeout, silent })

    const emptyOutputs = await deleteEmptyOutputs({ deleteEmptyEmittedFiles, outDir, silent })

    // eslint-disable-next-line functional/no-expression-statements
    await copyOnSuccess({ augmentation, copy, silent })

    if (includeDistPackageJson) {
      // eslint-disable-next-line functional/no-expression-statements
      await resolveDistPackageJson({ emptyOutputs, outDir })
    }

    if (!bundle) {
      // eslint-disable-next-line functional/no-expression-statements
      await replaceTSCAliasPaths({ outDir, silent })
    }

    return await execute({ executeOnWatch, mainEntry, onSuccess, outDir, watch })
  }
}

export { resolveOnSuccess }
