import { config } from './src/index.js'

export default config({
  copy: ['tsconfig.json'],
  extraEntry: [
    {
      format: 'cjs',
      options: {
        target: 'es2017',
        treeshake: false
      },
      path: './tscAliasPaths/baseUrlReplacer/baseUrlReplacer.ts'
    }
  ],
  includeCJSBundle: true
})
