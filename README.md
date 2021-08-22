# WebDriverIO_Project
Web Automation using WebDriverIO
WebdriverIO is an open source e2e (End-to-End) test automation utility for nodejs. It lets you control a browser or a mobile application with just a few lines of code. 


## Installation:

Please install <a href="http://nodejs.org/">Node.js</a> and <a href="http://www.oracle.com/technetwork/java/javase/downloads/index.html">Java Development Kit (JDK)</a> (Allure reports require Java).

### Step 1 - Clone the repo and hit the below command to download the nodeJs modules (The command considers the `package.json` file present in the cloned repo to download the dependencies):

```js
npm install
```

### Step 2 - Run the solution

Run the solution in Local Machine

```js
npm run test
```

Make sure the below configuration is present in wdio.conf.js
services: ['chromedriver']

Run the solution in docker

Make sure the below configuration is present in wdio.conf.js
services: ['docker']

npm run test => will both run the solution and generate the allure report.


## Reporting
HTML Allure Reports will get generated under allure-report folder in root directory.


## Directory Mapping

1)	.dockerignore => contains the files and folders to be ignore while creating the docker image of the test automation solution.
2)	.gitignore => contains the files and folders to be ignore while committing and pushing code to github.
3)	Docker-compose.yml => contains infrastructure code to setup and start selenium grid.
4)	Dockerfile => contains code to create a docker image of the test automation solution.
5)	Package.json => contains the key artifacts and dependency details which later helps us if required to download all the dependencies with one command.
6)	Wdio.conf.js => contains the entire configuration details related to WedbDriverIO.
7)	test => contains following sub folders, image-comparison-pics, pageobjects, specs, util
	a.	image-comparison-pics => contains the expected and actual images of the AUT.
	b.	Pageobjects => contains JS files with all the page object locators and associated page object functions.
	c.	Specs => contains the spec files or the files containing the test functions(test suite)
	d.	Util => Contains the utility functions.
	