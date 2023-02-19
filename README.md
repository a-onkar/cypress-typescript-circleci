## Quality Assurance - Technical test


### Plan & Strategy:
* Understand the product by exploratory testing with help of given test scenarios.
* Setup Cypress Framework.
* Create page object design pattern
* Design test scripts
* Deploy on CircleCI


## Mapping: Tasks vs Test Case Id and test execution result

![image](https://user-images.githubusercontent.com/25897622/130294251-d7991abd-9956-463c-a833-e16100fcb85c.png)


## How to SetUp Locally

* Clone the repo
* cd project_folder

```sh
npm install
```


### Open Cypress Test Runner

```sh
npm run cy:open
```

or

```sh
npx cypress open
```


### Run Cypress Tests in Headless Mode

```sh
npm run cy:run-chrome
npm run cy:run-firefox
```


### Run Cypress Tests in Headless Mode & Generate HTML Report

```sh
npm run test
npm run test-chrome
npm run test-firefox
```


### HTML Report Folder Path:
Please navigate to the below mentioned path in any file explorer & open the HTML report. 

```sh
w3w-technical-test-anand/cypress/reports/mochareports/report.html
```

### CircleCI Pipeline
Click this [Link](https://app.circleci.com/pipelines/github/a-onkar/cypress-typescript-circleci) to view the project pipeline on CircleCI.


## Author

👤 **Anandteerth Onkar**
