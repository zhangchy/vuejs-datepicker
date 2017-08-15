var merge = require('webpack-merge')
var prodEnv = require('./pro.env.js')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
