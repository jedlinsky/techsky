import type { BufferReplace } from './types.js'

const bufferReplace: BufferReplace = function ({ buffer, replace, search }) {
  const index = buffer.indexOf(search)

  if (index === -1) {
    return buffer
  }

  const left = buffer.subarray(0, index)
  const center = Buffer.isBuffer(replace) ? replace : Buffer.from(replace)
  const right = bufferReplace({ buffer: buffer.subarray(index + search.length), replace: center, search })

  const totalLength = index + center.length + right.length

  return Buffer.concat([left, center, right], totalLength)
}

export { bufferReplace }
