const { Builder, By, Key } = require("selenium-webdriver");
const assert = require("assert");
const should = require("chai").should();

describe("Add new todo ", () => {
  it("successfully add a new todo", async () => {
    var driver = new Builder().forBrowser("chrome").build();
    await driver.get("https://lambdatest.github.io/sample-todo-app/");
    driver.sleep(2000);
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("buy milk", Key.RETURN);
    driver.sleep(2000);
    //assert
    // const testFromTest = await driver
    //   .findElement(By.xpath("//li[last()]"))
    //   .getText()
    //   .then((value) => {
    //     return value;
    //   });
    //node assert
    // await assert.strictEqual(testFromTest, "buy milk");
    //chai assert
    // testFromTest.should.equal("cookie and milk");

    await driver.quit();
  });
});
