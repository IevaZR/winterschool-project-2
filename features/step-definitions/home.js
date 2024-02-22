import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../page-objects/home.page.js";
import { parseMenuExpression } from "../utils/utils.js";
import menuPage from "../page-objects/menu.page.js";

Given("I am on the home page", async function () {
  await homePage.open();
});

Then("I see the welcome message {string}", async function (message) {
  await expect(homePage.greetMessage).toHaveText(message);
});

When("I select {string} menu item", async function (menuExpression) {
  const menuItems = parseMenuExpression(menuExpression);
  await menuPage.selectMenuItem(menuItems);

  // we moved everything below ot menu.page.js
  // // we add loop index to the for loop
  // for (const [i, menuItem] of menuItems.entries()) {
  //     // if (i === menuItems.length - 1) {
  //     //   await (await $(`//nav//span[text()="${menuItem}"]`)).waitForDisplayed();
  //     //   await (await $(`//nav//span[text()="${menuItem}"]`)).click();
  //     // } else {
  //     //   await $(`//nav//span[text()="${menuItem}"]`).waitForDisplayed();
  //     //   await (await $(`//nav//span[text()="${menuItem}"]`)).moveTo();
  //     // }

  //     let el;

  //     await browser.waitUntil(async function () {
  //         // $$ returns all of the elements with the specific selector
  //         const element = await $$(`//nav//span[text()="${menuItem}"]`);

  //         for (const element of elements) {
  //             const isDisplayed = await element.isDisplayed()
  //             if (isDisplayed) {
  //                 el = element
  //                 return true
  //             }
  //         }
  //         return false
  //     })

  //     if (i === menuItems.length - 1) {
  //         el.click()
  //     } else {
  //         el.moveTo()
  //     }
  // }
});
