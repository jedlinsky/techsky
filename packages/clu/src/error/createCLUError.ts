import { CLUError } from './CLUError.js'
import type { CLUErrorProps } from './types.js'

const createCLUError = function <TName extends string>() {
  return function <TCLUErrorProps extends CLUErrorProps<TName>>({
    conjunction,
    disjunction,
    message,
    name
  }: TCLUErrorProps) {
    return new CLUError(name, message, { conjunction, disjunction })
  }
}

export { createCLUError }
