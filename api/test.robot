*** Variables ***

${HOSTNAME}             127.0.0.1
${PORT}                 3000
${SERVER}               http://${HOSTNAME}:${PORT}/
${BROWSER}              chrome


*** Settings ***

Documentation   Django React Tutorial
Library         Selenium2Library  timeout=30  implicit_wait=0
Library         DjangoLibrary  localhost  55001  path=tutorial/quickstart  manage=manage.py  settings=tutorial.settings
Library         WebpackLibrary
# Library         ReactLibrary
Library         DebugLibrary
Suite Setup     Test Setup
Suite Teardown  Test Teardown


*** Test Cases ***

Scenario: React is up and running
  Go to  ${SERVER}
  Wait until page contains  Welcome to React
  Page should contain  Welcome to React

Scenario: Navigate to About
  Go to  ${SERVER}
  Wait until page contains  Welcome to React
  Click link  About
  Wait until page contains  About Us
  Page should contain  About Us

Scenario: Navigate to Users
  Go to  ${SERVER}
  Wait until page contains  Welcome to React
  Click link  Users
  Wait until page contains  Users
  Page should contain  List of users

Scenario: List Users
  Create User	 admin  admin@example.com  supersecret
  Go to  ${SERVER}
  Wait until page contains  Welcome to React
  Click link  Users
  Wait until page contains  Users
  Wait until page contains  List of users
  Wait until page contains  admin
  Page should contain  admin
  Page should contain  admin@example.com

*** Keywords ***

Test Setup
  Start Chrome
  Start Django
  Start Webpack  yarn start  path=../frontend


Start Chrome
  ${options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
  Call Method  ${options}  add_argument  headless
  Call Method  ${options}  add_argument  disable-gpu
  Call Method  ${options}  add_argument  disable-web-security
  Call Method  ${options}  add_argument  window-size\=1280,1024
  # Call Method  ${options}  add_argument  remote-debugging-port\=9223
  Create WebDriver  Chrome  chrome_options=${options}

Test Teardown
  Stop Webpack
  Stop Django
  Close Browser