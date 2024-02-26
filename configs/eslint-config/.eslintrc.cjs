/**
 * @type {typeof import('./dist/index').createConfig }
 */
const createConfig = require('./dist/index.js').createConfig

module.exports = createConfig({
  extend: {
    rules: {
      'max-lines-per-function': 'off',
      'no-secrets/no-secrets': 'off'
    }
  }
})
