import { Page } from "./page.js";
import { browser } from "@wdio/globals";

class MenuPage extends Page {
    // 
    // we are not using this anymore with the newly added function

    async selectMenuItem(menuItems) {
        for (const [i, menuItem] of menuItems.entries()) {
            // if (i === menuItems.length - 1) {
            //   await (await $(`//nav//span[text()="${menuItem}"]`)).waitForDisplayed();
            //   await (await $(`//nav//span[text()="${menuItem}"]`)).click();
            // } else {
            //   await $(`//nav//span[text()="${menuItem}"]`).waitForDisplayed();
            //   await (await $(`//nav//span[text()="${menuItem}"]`)).moveTo();
            // }


            let el;

            await browser.waitUntil(async function () {
                // $$ returns all of the elements with the specific selector
                const elements = await $$(`//nav//span[text()="${menuItem}"]`);

                for (const element of elements) {
                    const isDisplayed = await element.isDisplayed()
                    if (isDisplayed) {
                        el = element
                        return true
                    }
                }
                return false
            })

            if (i === menuItems.length - 1) {
                await el.click()
            } else {
                await el.moveTo()
            }
        }
    }

}

export default new MenuPage();