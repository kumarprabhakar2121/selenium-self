require("dotenv").config();
const { Builder, By, Key } = require("selenium-webdriver");
const should = require("chai").should();
const capabilities = require("../capabilities").capabilities;
const LT_USERNAME = process.env.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;
const GRID_HOST = "hub.lambdatest.com/wd/hub";

describe("Add another new todo ", () => {
  var driver;
  const gridUrl =
    "https://" + LT_USERNAME + ":" + LT_ACCESS_KEY + "@" + GRID_HOST;

  beforeEach(() => {
    /* for using lambdatest */
    driver = new Builder()
      .usingServer(gridUrl)
      .withCapabilities(capabilities)
      .build();
      /* for using local machine */
    // driver = new Builder().forBrowser("chrome").build();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("successfully add another new todo", async () => {
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("buy milk", Key.RETURN);

    const testFromTest = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then((value) => {
        return value;
      });

    //chai assert
    testFromTest.should.equal("buy milk");
  });
  it("adding a new test for reposting", async () => {
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("buy cookie", Key.RETURN);

    const testFromTest = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then((value) => {
        return value;
      });

    //chai assert
    testFromTest.should.equal("buy cookie");
  });
});
