*** Variables ***

${HOSTNAME}             127.0.0.1
${PORT}                 3000
${SERVER}               http://${HOSTNAME}:${PORT}/
${BROWSER}              chrome


*** Settings ***

Documentation   Django React Tutorial
Library         Selenium2Library  timeout=30  implicit_wait=0
Test Setup      Test Setup
Test Teardown   Close Browser


*** Test Cases ***

Scenario: React is up and running
  Go to  ${SERVER}
  Wait until page contains  Welcome to React
  Page should contain  Welcome to React


*** Keywords ***

Test Setup
  ${options}=  Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
  Call Method  ${options}  add_argument  headless
  Call Method  ${options}  add_argument  disable-gpu
  Call Method  ${options}  add_argument  disable-web-security
  Call Method  ${options}  add_argument  window-size\=1280,1024
  # Call Method  ${options}  add_argument  remote-debugging-port\=9223
  Create WebDriver  Chrome  chrome_options=${options}