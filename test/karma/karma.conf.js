// Karma configuration
// Generated on Thu Aug 24 2017 09:55:11 GMT+0800 (中国标准时间)
var webpack = require('webpack')
var webpackConfig = require('../../build/webpack.test.config.js');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    // 要测试的目标文件
    files: [
      './specs/**/*.js'
    ],
    // list of files to exclude
    exclude: [
    ],
    // 预处理文件
    preprocessors: {
      './specs/*.js': ['webpack', 'sourcemap']
    },
    // 测试报告处理
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },

    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'IE'],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // how many browser should be started simultaneous
    concurrency: Infinity,
    webpack: webpackConfig,
    webpackMiddleware:{
      noInfo:false
    }
  })
}
