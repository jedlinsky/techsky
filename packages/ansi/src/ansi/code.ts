const code = {
  bg: {
    black: 40,
    blue: 44,
    blueLight: 104,
    cyan: 46,
    cyanLight: 106,
    gray: 100,
    green: 42,
    greenLight: 102,
    magenta: 45,
    magentaLight: 105,
    red: 41,
    redLight: 101,
    white: 47,
    whiteLight: 107,
    yellow: 43,
    yellowLight: 103
  },
  color: {
    black: 30,
    blue: 34,
    blueLight: 94,
    cyan: 36,
    cyanLight: 96,
    gray: 90,
    green: 32,
    greenLight: 92,
    magenta: 35,
    magentaLight: 95,
    red: 31,
    redLight: 91,
    white: 37,
    whiteLight: 97,
    yellow: 33,
    yellowLight: 93
  },
  reset: {
    all: 0,
    bg: 49,
    blink: 25,
    bold: 22,
    color: 39,
    underline: 24
  },
  style: {
    blink: 5,
    bold: 1,
    underline: 4
  }
} as const

export { code }
