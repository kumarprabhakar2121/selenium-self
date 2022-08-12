// Go to single.conf.js for running single test
require("dotenv").config();
LT_USERNAME = process.env.LT_USERNAME;
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;

exports.capabilities = {
  build: "Mocha-Selenium-Sample", //Build name
  name: "Your Test Name", // Test name
  platform: "Windows 11", // OS name
  browserName: "Chrome", // Browser name
  version: "104.0", // Browser version
  resolution: "1024x768",
  visual: false, // To take step by step screenshot
  network: false, // To capture network Logs
  console: false, // To capture console logs.
  tunnel: false, // If you want to run the localhost than change it to true
};
