import type { ClearConsole } from 'clear/index.js'

type PrintBannerProps = {
  readonly author: string
  readonly clearConsole?: ClearConsole
  readonly description: string
  readonly header: string
  readonly version: string
}

type PrintBanner = (props: PrintBannerProps) => Promise<void>

type PrintDividerProps = {
  readonly char?: string
  readonly lines?: number
  readonly width?: number
}

type PrintDivider = (props?: PrintDividerProps) => void

type PrintError = (error: Error | unknown, debug?: boolean) => void

export type { PrintBanner, PrintDivider, PrintError }
