$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeaturesFiles/a.feature");
formatter.feature({
  "line": 2,
  "name": "Registered User and Guest User can buy product.",
  "description": "",
  "id": "registered-user-and-guest-user-can-buy-product.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NopCommerce"
    }
  ]
});
formatter.before({
  "duration": 11240150200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Registered User can buy any product",
  "description": "",
  "id": "registered-user-and-guest-user-can-buy-product.;registered-user-can-buy-any-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@test1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should be able to complete registration successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User selects the product",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User fill in the payment details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should see the confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToCompleteRegistrationSuccessfully()"
});
formatter.result({
  "duration": 33845128700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\"result\"]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JT1KMEB\u0027, ip: \u0027192.168.1.64\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Bhavya\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:62711}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 11941ca8ad422a0b06ac99ccb663cad3\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\"result\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat July2020.UtilsPage.extractText(UtilsPage.java:88)\r\n\tat July2020.RegisterPage.verifyUserIsRegistered(RegisterPage.java:34)\r\n\tat July2020.MyStepdefs.userShouldBeAbleToCompleteRegistrationSuccessfully(MyStepdefs.java:24)\r\n\tat ✽.Given User should be able to complete registration successfully(src/test/Resources/FeaturesFiles/a.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsTheProduct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userFillInThePaymentDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1491480000,
  "status": "passed"
});
formatter.before({
  "duration": 8384047600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Guest User should Be able to buy product.",
  "description": "",
  "id": "registered-user-and-guest-user-can-buy-product.;guest-user-should-be-able-to-buy-product.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User selects the product",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "click continue as guest.",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User fill in the payment details with name",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should see the confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userSelectsTheProduct()"
});
formatter.result({
  "duration": 11087528000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clickContinueAsGuest()"
});
formatter.result({
  "duration": 4130927600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userFillInThePaymentDetailsWithName()"
});
formatter.result({
  "duration": 8476030600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeTheConfirmationMessage()"
});
formatter.result({
  "duration": 66318200,
  "status": "passed"
});
formatter.after({
  "duration": 873708000,
  "status": "passed"
});
});