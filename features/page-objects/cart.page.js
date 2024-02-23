import { Page } from "./page.js";

class CartPage extends Page {
    async open() {
        await browser.navigateTo('https://magento.softwaretestingboard.com/checkout/cart/')
        await expect(this.pageTitle).toHaveText("Shopping Cart");
    }

    get firstRemoveItemButton() { return $('.actions-toolbar [title="Remove Item"]') }
    get pageTitle() { return $('.page-title'); }

    async removeAllProducts() {
        await browser.waitUntil(async () => {
            try {
                await this.firstRemoveItemButton.waitForDisplayed({ timeout: 2000 })
                await this.firstRemoveItemButton.click()
                
                // the element is visible
                return false
            } catch {
                // the element isn't visible, no remove buttons and we can stop execution
                return true
            }

        }, {timeout: 30000})
    }
}

export default new CartPage();

