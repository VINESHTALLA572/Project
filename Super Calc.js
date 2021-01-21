const { browser, element } = require("protractor")

describe("Super Calc", function() {
    it("Working on Super Calc", function() {

        browser.ignoreSynchronization = true;

        browser.get("https://juliemr.github.io/protractor-demo/");

        browser.driver.sleep(5000);

        browser.manage().window().maximize();

        browser.driver.sleep(4000);

        element(by.xpath("//body/div[1]/div[1]/form[1]/input[1]")).sendKeys("10");

        browser.driver.sleep(4000);

        element(by.xpath("//body/div[1]/div[1]/form[1]/input[2]")).sendKeys("15");

        browser.driver.sleep(4000);

        element(by.xpath("//button[@id='gobutton']")).click();

        browser.driver.sleep(5000);
    })
})