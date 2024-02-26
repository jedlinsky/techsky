import type { Options as FigletOptions } from 'figlet'
import type { DeepReadonly } from 'ts-essentials'

type BannerOptions = DeepReadonly<FigletOptions> | undefined

type Banner = (header: string, subheader?: string) => Promise<string | undefined>

type Figlet = (text: string, options?: BannerOptions) => Promise<string>

type GetDashedLineProps = {
  readonly indent: string
  readonly lineLength: number
}

type GetDashedLine = (props: GetDashedLineProps) => string

type GetIndent = () => string

type ResolvedHeader = {
  readonly header: string
  readonly lineLength: number
}

type ResolveBannerProps = {
  readonly header: string
  readonly indent: string
  readonly lineLength: number
  readonly subheader: string | undefined
}

type ResolveBanner = (props: ResolveBannerProps) => string

type ResolveHeaderProps = {
  readonly indent: string
  readonly text: string
}

type ResolveHeader = (props: ResolveHeaderProps) => Promise<ResolvedHeader>

type ResolveSubheaderProps = {
  readonly indent: string
  readonly lineLength: number
  readonly text: string | undefined
}

type ResolveSubheader = (props: ResolveSubheaderProps) => string | undefined

export type { Banner, BannerOptions, Figlet, GetDashedLine, GetIndent, ResolveBanner, ResolveHeader, ResolveSubheader }
