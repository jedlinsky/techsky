const isPureObject = function (value: unknown): value is Record<string, unknown> {
  if (!value) {
    return false
  }

  const prototype = Object.getPrototypeOf(value) as unknown

  return prototype === Object.prototype || prototype === null
}

export { isPureObject }
