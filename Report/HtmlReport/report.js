$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel booking in Adactin application.",
  "description": "",
  "id": "hotel-booking-in-adactin-application.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launching The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"\u003csername\u003e\" In The Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"\u003cassword\u003e\" In the Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Clicks LoginButton And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;login-page;",
  "rows": [
    {
      "cells": [
        "sername",
        "",
        "assword"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application.;login-page;;1"
    },
    {
      "cells": [
        "sp@gmail.com",
        "",
        "454545"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application.;login-page;;2"
    },
    {
      "cells": [
        "sp12@gmail.com",
        "",
        "45454555"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application.;login-page;;3"
    },
    {
      "cells": [
        "mki",
        "",
        "454545"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application.;login-page;;4"
    },
    {
      "cells": [
        "Mahesh115",
        "",
        "qwerty@123"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application.;login-page;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launching The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"sp@gmail.com\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"454545\" In the Password Field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Clicks LoginButton And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launching_The_Application()"
});
formatter.result({
  "duration": 11359003800,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHNNO0C9\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dcdfdf19b22eee76ec07466690c80710\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.baseclass.Base_Class.getUrl(Base_Class.java:40)\r\n\tat com.adactin_step_definition.Step_Definition.user_Launching_The_Application(Step_Definition.java:22)\r\n\tat ✽.Given user Launching The Application(Adactin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "sp@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_The_Username_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "454545",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_the_Password_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_LoginButton_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launching The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"sp12@gmail.com\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"45454555\" In the Password Field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Clicks LoginButton And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launching_The_Application()"
});
formatter.result({
  "duration": 12208831700,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHNNO0C9\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dcdfdf19b22eee76ec07466690c80710\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.baseclass.Base_Class.getUrl(Base_Class.java:40)\r\n\tat com.adactin_step_definition.Step_Definition.user_Launching_The_Application(Step_Definition.java:22)\r\n\tat ✽.Given user Launching The Application(Adactin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "sp12@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_The_Username_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "45454555",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_the_Password_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_LoginButton_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;login-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launching The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"mki\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"454545\" In the Password Field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Clicks LoginButton And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launching_The_Application()"
});fformatter.result({
  "duration": 12263536900,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHNNO0C9\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dcdfdf19b22eee76ec07466690c80710\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.baseclass.Base_Class.getUrl(Base_Class.java:40)\r\n\tat com.adactin_step_definition.Step_Definition.user_Launching_The_Application(Step_Definition.java:22)\r\n\tat ✽.Given user Launching The Application(Adactin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "mki",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_The_Username_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "454545",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_the_Password_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_LoginButton_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;login-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launching The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"Mahesh115\" In The Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"qwerty@123\" In the Password Field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Clicks LoginButton And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launching_The_Application()"
});fformatter.result({
  "duration": 12218799500,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHNNO0C9\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dcdfdf19b22eee76ec07466690c80710\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.baseclass.Base_Class.getUrl(Base_Class.java:40)\r\n\tat com.adactin_step_definition.Step_Definition.user_Launching_The_Application(Step_Definition.java:22)\r\n\tat ✽.Given user Launching The Application(Adactin.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mahesh115",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_The_Username_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "qwerty@123",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_In_the_Password_Field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_LoginButton_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Searching the hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;searching-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user \"byindex\" in \"2\" The Location",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User Select The_Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Select The Roomtype",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Clears The Default Date And Enters The CheckIn Date",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Clears The Default Date And Enters The CheckOut Date",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User Selects The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User Clicks On The Search Button And It Navigates To The Book Hotel Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "byindex",
      "offset": 6
    },
    {
      "val": "2",
      "offset": 19
    }
  ],
  "location": "Step_Definition.user_in_The_Location(String,String)"
});fformatter.result({
  "duration": 12337109300,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHNNO0C9\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dcdfdf19b22eee76ec07466690c80710\n*** Element info: {Using\u003did, value\u003dlocation}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.baseclass.Base_Class.dropdown(Base_Class.java:69)\r\n\tat com.adactin_step_definition.Step_Definition.user_in_The_Location(Step_Definition.java:60)\r\n\tat ✽.When user \"byindex\" in \"2\" The Location(Adactin.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Roomtype()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Clears_The_Default_Date_And_Enters_The_CheckIn_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Clears_The_Default_Date_And_Enters_The_CheckOut_Date()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Adults_Per_Room()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_On_The_Search_Button_And_It_Navigates_To_The_Book_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Select the hotel in select hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;select-the-hotel-in-select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "user Clicks On The Select Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User Clicks On The Continue Button And It Navigates To The Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Clicks_On_The_Select_Radio_Button()"
});fformatter.result({
  "duration": 12219167700,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHNNO0C9\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dcdfdf19b22eee76ec07466690c80710\n*** Element info: {Using\u003did, value\u003dradiobutton_0}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.baseclass.Base_Class.clickOnElement(Base_Class.java:30)\r\n\tat com.adactin_step_definition.Step_Definition.user_Clicks_On_The_Select_Radio_Button(Step_Definition.java:104)\r\n\tat ✽.When user Clicks On The Select Radio Button(Adactin.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_On_The_Continue_Button_And_It_Navigates_To_The_Book_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 35,
  "name": "Book a hotel page",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;book-a-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "user Enters The FirstName InThe FirstName Field",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user Enters The  LastName InThe LastName Field",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user Enters The Billing Address InThe Billing Address Field",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user Enters The Credit Card Number InThe CreditCard Field",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user Selects The CreditCard Type",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user Selects The Month InThe Expiry Month Field",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user Selects The Year InThe Expiry Year Field",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "user Enters The  Cvv Number InThe Cvv Number Field",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "user Clicks OnThe Book Now Button And It Navigates To The Booking Confirmation Page",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_FirstName_InThe_FirstName_Field()"
});fformatter.result({
  "duration": 12190533400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHNNO0C9\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dcdfdf19b22eee76ec07466690c80710\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"first_name\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.baseclass.Base_Class.inputValueElement(Base_Class.java:35)\r\n\tat com.adactin_step_definition.Step_Definition.user_Enters_The_FirstName_InThe_FirstName_Field(Step_Definition.java:115)\r\n\tat ✽.When user Enters The FirstName InThe FirstName Field(Adactin.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_LastName_InThe_LastName_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_Billing_Address_InThe_Billing_Address_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_Credit_Card_Number_InThe_CreditCard_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_CreditCard_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Month_InThe_Expiry_Month_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Selects_The_Year_InThe_Expiry_Year_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_Cvv_Number_InThe_Cvv_Number_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_OnThe_Book_Now_Button_And_It_Navigates_To_The_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 46,
  "name": "Booking Confirmation",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;booking-confirmation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "user Clicks On The My Itienary Button And Navigates To The Booked Itienary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Clicks_On_The_My_Itienary_Button_And_Navigates_To_The_Booked_Itienary_Page()"
});fformatter.result({
  "duration": 12198617000,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHNNO0C9\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dcdfdf19b22eee76ec07466690c80710\n*** Element info: {Using\u003did, value\u003dmy_itinerary}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.baseclass.Base_Class.clickOnElement(Base_Class.java:30)\r\n\tat com.adactin_step_definition.Step_Definition.user_Clicks_On_The_My_Itienary_Button_And_Navigates_To_The_Booked_Itienary_Page(Step_Definition.java:162)\r\n\tat ✽.Then user Clicks On The My Itienary Button And Navigates To The Booked Itienary Page(Adactin.feature:47)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 49,
  "name": "Cancellation  and Logging-out",
  "description": "",
  "id": "hotel-booking-in-adactin-application.;cancellation--and-logging-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "Clicks On The OrderId",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user Clicks On The Cancel Selected Button And Alert Is Popped-up",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user CLicks Ok On The Alert Box And Booking Is Cancelled",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definition.clicks_On_The_OrderId()"
});fformatter.result({
  "duration": 12206009200,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-QHNNO0C9\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_301\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\MAHESH~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54726}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dcdfdf19b22eee76ec07466690c80710\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"booked_form\"]/table/tbody/tr[2]/td/table/tbody/tr[6]/td[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.baseclass.Base_Class.clickOnElement(Base_Class.java:30)\r\n\tat com.adactin_step_definition.Step_Definition.clicks_On_The_OrderId(Step_Definition.java:167)\r\n\tat ✽.When Clicks On The OrderId(Adactin.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Definition.user_Clicks_On_The_Cancel_Selected_Button_And_Alert_Is_Popped_up()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Definition.user_CLicks_Ok_On_The_Alert_Box_And_Booking_Is_Cancelled()"
});
formatter.result({
  "status": "skipped"
});
});