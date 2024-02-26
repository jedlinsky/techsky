import { config } from '@techsky/tsupconfig'

export default config({
  dts: false,
  external: [/^@?typescript.*/, /^eslint.*/],
  includeCJSBundle: true
})
