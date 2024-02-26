import { config } from '@techsky/tsupconfig'

export default config({
  copy: [['*.json', '!tsconfig.json']],
  entry: null
})
