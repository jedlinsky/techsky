import EventEmitter from 'node:events'
import type { DTSEmitter } from './types.js'

const dtsEmitter = new EventEmitter() as DTSEmitter

export { dtsEmitter }
