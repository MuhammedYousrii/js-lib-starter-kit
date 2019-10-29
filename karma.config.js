const path = require('path');
const { dependencies } = require('./package.json');
// Karma configuration
module.exports = function (config) {
  config.set({
    basePath: path.resolve(process.cwd(), '__test__'),
    
    
    // LIBS THAT WILL BE USED INTO UNIT TESTING
    frameworks: ['mocha', 'chai'],

    // ENABLE WATCHING TO RELOAD EVERY TIME FILES HAS BEEN CHANGED
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    concurrency: Infinity,
    

    // DISABLE SINGLE RUN
    singleRun: true,

    // PORT FOR VIEWING
    port: 5000,


    // BROWSER TO OPEN IN
    browsers: ['Chrome'],
    
    
    // HOSTNAME TO OPEN ON 
    hostName: 'localhost',
    
    
    client: {
      // MOCHA PROVIDE SO MANY TEMPLATES TO OUT TESTINGS RESULTS, WE CHOOSE THE HTML TEMPLATE
      mocha: {
        reporter: 'html',
        expose: ['body']
      }
    },

    // KAMA RUNNER WILL LOOK FOR, CHECK AND WATCH EVERY FILE NAMED WITH THIS   
    files: [{
      pattern: '**/*.spec.ts',
      watched: true
    }],

    // WHERE SHOULDN'T KARMA LOOK
    exclude: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'app'),
      path.join(__dirname, 'dist'),
    ],

    externals: Object.keys(dependencies),

    // WHERE SHOULD PREPROCESSOR WATCH 
    preprocessors: {
      // add webpack as preprocessor
      // '**/*.spec.ts': ['webpack']
      '**/*.ts': ['webpack', 'sourcemap']
    },

    // WEBPACK CONFIG
    webpack: require('./webpack.config.js')({
      NODE_ENV: 'testing'
    }, {
      mode: 'development'
    }),

    webpackMiddleware: {
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000, // customize depending on PC power
      },
    }
  });
};
