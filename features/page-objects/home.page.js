import { Page } from "./page.js";
import { browser } from "@wdio/globals";

class HomePage extends Page {

    async open() {
        await browser.navigateTo("https://magento.softwaretestingboard.com/");
    }

    get signInLink() {
        return $('//header[@class="page-header"]//a[contains(text(), "Sign In")]');
    }

    get greetMessage() {
        return $('.page-header .logged-in')
    }

    get dropdownButton() {
        return $('.page-header button[data-action=customer-menu-toggle]')
    }

    dropdownItem(itemName) {
        return $(`//header//div[@class="customer-menu"]//a[contains(text(), '${itemName}')]`)
    }

    async selectUserDropdown(itemName) {
        await this.dropdownButton.click()
        await this.dropdownItem(itemName).click()
    }
}

export default new HomePage();
