// Karma configuration
// Generated on Tue Oct 27 2015 23:33:28 GMT-0400 (EDT)

var webpackConfig = require('./webpack.config.js'),
  path = require('path');

webpackConfig.module.postLoaders = [
  {
       test: /\.js$/,
       loader: 'istanbul-instrumenter'
   }
];

webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'js/lib/angular-mocks.js',
      'test/interface/**/*-spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'js/lib/angular-mocks.js': ['webpack'],
      'test/interface/**/*.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha', 'coverage'],


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
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity,

    webpack: {
      resolve: {
        root: [
            path.resolve('./js')
        ]
      },
      //devtool: 'inline-source-map',
      module: {
          postLoaders: [ { //delays coverage til after tests are run, fixing transpiled source coverage error
            test: /\.js$/,
            exclude: /(test|node_modules|bower_components|js\/lib)\//,
            loader: 'istanbul-instrumenter'
          } ]
        }
    },

    webpackServer: {
      noInfo: true
    },

    coverageReporter: {
      type : 'html',
      dir: 'coverage/'
    }

  })
}