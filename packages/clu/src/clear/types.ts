type ClearConsole = boolean | 'keepPrevious'

type Clear = (clearConsole: ClearConsole) => void

type ClearKeepPrevious = (withDivider?: boolean) => void

type ClearWithoutPrevious = () => void

export type { Clear, ClearConsole, ClearKeepPrevious, ClearWithoutPrevious }
