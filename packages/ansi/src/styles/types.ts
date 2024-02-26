type Style = (text: number | string) => string

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type StyleValue = (value: any) => string

type Warning = (text: string, prependFigure?: boolean) => string

export type { Style, StyleValue, Warning }
