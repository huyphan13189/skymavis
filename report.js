let reporter = require('cucumber-html-reporter');

let options = {
        theme: 'bootstrap',
        jsonFile: 'output/cucumber_output.json',
        output: 'output/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"3.3.3",
            "Test Environment": "TEST",
            "Browser": "Chrome  100.0.4896.127",
            "Platform": "MAC OS",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);
    

    //more info on `metadata` is available in `options` section below.

    //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.