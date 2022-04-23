exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      // url: '',
      show: true, // false is headless
      // windowSize: '1920x1080',
      // defaultViewport: null,
      // getPageTimeout:0,
      chrome: {
        args: ['--no-sandbox', '--window-size=1200,900', '--disable-web-security'],
        ignoreHTTPSErrors: true,
        defaultViewport: {
          width:1200,
          height:900
        }
      },
    },
    REST: {
      timeout: 30000,
      endpoint: '',
      onRequest: (request) => {
      }
    },
    JSONResponse: {},
    PupHelper: {
      require: './core/helpers/pup_helper.js',
    },
    HookHelper: {
      require: './core/helpers/hook_helper.js',
    },
    ResembleHelper: {
      "require": "codeceptjs-resemblehelper",
      "screenshotFolder": "./output/",
      "baseFolder": "./compare_img/base/",
      "diffFolder": "./compare_img/diff/"
    },
    ChaiWrapper: {
      "require": "codeceptjs-chai"
    },
    MockRequestHelper: {
      require: '@codeceptjs/mock-request',
      mode: 'replay',
      recordIfMissing: true,
      recordFailedRequests: false,
      expiresIn: null,
      persisterOptions: {
        keepUnusedRequests: false,
        fs: {
          recordingsDir: './data_mock/requests',
        },
      },
    },
  },
  include: {
    I: './steps_file.js',
    api: './pages/api/api.page.js',
    register: './pages/api/register.page.js',
    web: './pages/web/web.page.js',
    gmail: './pages/web/gmail.page.js',
  },
  mocha: {
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: './steps/*.step.js'
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    allure: {
      enabled: true
    },
    // stepByStepReport: {
    //   enabled: true,
    //   fullPageScreenshots: true,
    //   screenshotsForAllureReport: true
    // }
    tryTo: {
      enabled: true
    },
    cucumberJsonReporter: {
      require: 'codeceptjs-cucumber-json-reporter',
      enabled: true,               // if false, pass --plugins cucumberJsonReporter
      attachScreenshots: true,     // true by default
      attachComments: true,        // true by default
      outputFile: 'cucumber_output.json',     // cucumber_output.json by default
      uniqueFileNames: false,      // if true outputFile is ignored in favor of unique file names in the format of `cucumber_output_<UUID>.json`.  Useful for parallel test execution
      includeExampleValues: false,  // if true incorporate actual values from Examples table along with variable placeholder when writing steps to the report
      timeMultiplier: 1000000    // Used when calculating duration of individual BDD steps.  Defaults to nanoseconds
    },
  },
  name: 'Codeceptjs'
}