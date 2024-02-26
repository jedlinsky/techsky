import { formatErrorValues } from './formatErrorValues.js'
import type { ErrorJunctionUndefinable } from './types.js'

// eslint-disable-next-line functional/no-classes
class CLUError extends Error {
  constructor(
    name: string | null = null,
    message: string,
    { conjunction, disjunction }: ErrorJunctionUndefinable = {}
  ) {
    const values = formatErrorValues({
      conjunction,
      disjunction
    })

    super(values ? message.replace('#{values}', values) : message)

    // eslint-disable-next-line functional/no-this-expressions
    Object.setPrototypeOf(this, new.target.prototype)

    if (name !== null) {
      // eslint-disable-next-line functional/no-expression-statements, functional/no-this-expressions
      this.name = name
    }
  }
}

export { CLUError }
