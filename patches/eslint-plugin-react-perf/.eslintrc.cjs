const { createConfig } = require('@techsky/eslint-config')

module.exports = createConfig({
  extend: {
    overrides: [
      {
        files: ['src/index.ts'],
        rules: {
          '@typescript-eslint/no-unsafe-assignment': 'off'
        }
      }
    ]
  }
})
