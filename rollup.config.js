const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const uglify = require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
import postcss from 'rollup-plugin-postcss';

export default {
  entry: 'src/index.js',
  external: [
    'vue'
  ],
  globals: {
    vue: 'Vue'
  },
  format: 'umd',
  moduleName: 'VueDatePicker',
  dest: 'dist/vue-datepicker.js',
  plugins: [
    postcss({
      extensions: [ '.css' ],
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    vue({
      compileTemplate: true,
      css: true
    }),
    buble(),
    uglify({
      compress: {
        global_defs: {
          __DEV__: process.env.NODE_ENV !== 'production'
        }
      }
    })
  ]
}
