import { Page } from "./page.js";

class CartPage extends Page {
    async open() {
        browser.navigateTo('https://magento.softwaretestingboard.com/checkout/cart/')
    }

    get firstRemoveItemButton() { return $('.actions-toolbar [title="Remove Item"]') }

    async removeAllProducts() {
        await browser.waitUntil(async () => {
            try {
                await this.firstRemoveItemButton.waitForDisplayed()
                await this.firstRemoveItemButton.click()
                
                // the element is visible
                return false
            } catch {
                // the element isn't visible, no remove buttons and we can stop execution
                return true
            }

        })
    }
}

export default new CartPage();

