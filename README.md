# API automation framework

# How to set up and run test
1. Install nodejs: https://nodejs.org/en/download/

2. Install dependencies
- npm install

4. Run a test with @tag:
With MAC, Linux:
- TEST_ENV=test npx codeceptjs run --plugins cucumberJsonReporter --grep "@Regression"
With CMD window:
- set TEST_ENV=test
- npx codeceptjs run --plugins cucumberJsonReporter --grep "@Regression"

5. Open cucumber report
- node report.js

# How to generate Allure on local
1. Install JDK onlocal: https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html
2. Install allure:
- npm install -g allure-commandline
3. Generate report:
- allure serve output