// Rollup plugins
const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const uglify = require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const copy = require('rollup-plugin-copy')
// import postcss from 'rollup-plugin-postcss';
// import simplevars from 'postcss-simple-vars'
// import nested from 'postcss-nested'
// import cssnext from 'postcss-cssnext'
// import cssnano from 'cssnano'

export default {
  entry: 'src/index.js',
  dest: 'production/vue-datepicker.js',
  moduleName: 'VueDatepicker',
  format: 'umd',
  globals: {
    vue: 'Vue'
  },
  plugins: [
    /*postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false, }),
        cssnano()
      ],
      extensions: [ '.css' ]
    }),*/
    copy({
      "src/assets/css/dateRange.css": "production/css/dateRange.css",
      "src/assets/images/calendar_all.png": "production/images/calendar_all.png",
      verbose: true
    }),
    resolve(),
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
};
