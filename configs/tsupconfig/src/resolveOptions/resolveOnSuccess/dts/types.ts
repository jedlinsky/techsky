// https://github.com/andywer/typed-emitter - typed import didn't worked in esm.

// Worker import doesn't work with `node:` prefix.
// eslint-disable-next-line unicorn/prefer-node-protocol
import type { Worker } from 'worker_threads'
import type { Silent } from 'resolveOptions/types.js'
import type { DTSTimeout, TSUpOptions } from 'types.js'

type Events = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly [key: string]: (...args: readonly any[]) => void
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
interface TypedEmitter<TEvents extends Events> {
  readonly addListener: <TEvent extends keyof TEvents>(event: TEvent, listener: TEvents[TEvent]) => this
  readonly emit: <TEvent extends keyof TEvents>(event: TEvent, ...args: Parameters<TEvents[TEvent]>) => boolean
  readonly eventNames: () => readonly (string | symbol | keyof TEvents)[]
  readonly getMaxListeners: () => number
  readonly listenerCount: <TEvent extends keyof TEvents>(event: TEvent) => number
  readonly listeners: <TEvent extends keyof TEvents>(event: TEvent) => readonly TEvents[TEvent][]
  readonly off: <TEvent extends keyof TEvents>(event: TEvent, listener: TEvents[TEvent]) => this
  readonly on: <TEvent extends keyof TEvents>(event: TEvent, listener: TEvents[TEvent]) => this
  readonly once: <TEvent extends keyof TEvents>(event: TEvent, listener: TEvents[TEvent]) => this
  readonly prependListener: <TEvent extends keyof TEvents>(event: TEvent, listener: TEvents[TEvent]) => this
  readonly prependOnceListener: <TEvent extends keyof TEvents>(event: TEvent, listener: TEvents[TEvent]) => this
  readonly rawListeners: <TEvent extends keyof TEvents>(event: TEvent) => readonly TEvents[TEvent][]
  readonly removeAllListeners: <TEvent extends keyof TEvents>(event?: TEvent) => this
  readonly removeListener: <TEvent extends keyof TEvents>(event: TEvent, listener: TEvents[TEvent]) => this
  readonly setMaxListeners: (maxListeners: number) => this
}

type Result = 'error' | 'success'

type DTSEvents = {
  readonly end: (result: Result) => void
}

type DTSEmitter = TypedEmitter<DTSEvents>

type DTSListener = (worker: Worker) => void

type DTSMessageStoreValue = {
  readonly text: string
  readonly type: Result
}

type DTSWorkerMessageType = 'error' | 'log'

type DTSWorkerMessage = {
  readonly text: string
  readonly type: DTSWorkerMessageType
}

type FindMessageProps = {
  readonly includes: readonly string[]
  readonly text: string
}

type FindMessage = (props: FindMessageProps) => string | null

type HandleDTSProps = {
  readonly dts: TSUpOptions['dts']
  readonly dtsTimeout: DTSTimeout
  readonly silent: Silent
}

type HandleDTS = (props: HandleDTSProps) => Promise<void>

type HandleMessage = (message: unknown) => void

type InitDTSListener = () => void

type IsDTSSuccessFromStore = () => boolean

type OnDTSSuccessProps = {
  readonly dtsTimeout: DTSTimeout
}

type OnDTSSuccess = (props: OnDTSSuccessProps) => Promise<void>

type OnDTSSuccessRejectionError = Error | 'error' | 'timeoutError'

export type {
  DTSEmitter,
  DTSEvents,
  DTSListener,
  DTSMessageStoreValue,
  DTSWorkerMessage,
  FindMessage,
  HandleDTS,
  HandleMessage,
  InitDTSListener,
  IsDTSSuccessFromStore,
  OnDTSSuccess,
  OnDTSSuccessRejectionError
}
