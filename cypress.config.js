const { defineConfig } = require("cypress");
//const {addMatchImageShapshotPlugin} = require('cypress-image-snapshot/plugin')

module.exports = defineConfig({
  //viewportHeight: 2250,
  //viewportWidth: 1850,
 
  e2e: {
    setupNodeEvents(on, config) {
      //addMatchImageShapshotPlugin(on,config)
    },
  //excludeSpecPattern: ['**/cypress/e2e/1-getting-started','**/cypress/e2e/2-advanced-examples'],
      //baseUrl: 'https://www.maxon.net/en/',
      //defaultCommandTimeout: 6000,
      //retries:2,
      //redirectionLink: 20,
      //watchForFileChanges: true,
      //pageLoadTimeout: 6000, 
      //responceTimeout: 30000,
      //screenshotOnRunFailure: false,
      //slowTestThreshold: 10000,

     },
  });

