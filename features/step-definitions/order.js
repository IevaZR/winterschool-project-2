import { Given, Then, When } from "@wdio/cucumber-framework";
import productsPage from "../page-objects/products.page.js";
import productPage from "../page-objects/product.page.js";
import page from "../page-objects/page.js";
import shippingPage from "../page-objects/shipping.page.js";
import reviewPage from "../page-objects/review.page.js";
import checkoutPage from "../page-objects/checkout.page.js";
import orderPage from "../page-objects/order.page.js";
import { priceStringToNumber } from "../utils/utils.js";
import headerPage from "../page-objects/header.page.js";
import cartPage from "../page-objects/cart.page.js";
import homePage from '../page-objects/home.page.js'

Given("I have no items in my Cart", async function () {
    await cartPage.open()
    await cartPage.removeAllProducts()
    await homePage.open()
});
When("I click on a product", async function () {
    // to stop execution and see what is going on
    // await browser.debug()
    await productsPage.firstProductPhoto.click();
});


When("I select size and color", async function () {
    const sizeElement = await productPage.firstSizeButton;
    await sizeElement.click();
    this.sizeText = await sizeElement.getText(); //to save the size of the product
    // here we use this object to save the data (it is called Cucumber context - saved during duration of the scenario). it will be available for other functions during the duration of the scenario

    const colorElement = await productPage.firstColorButton
    await colorElement.click()
    this.color = await colorElement.getAttribute('option-label')
});

When('I click the Add to Card button', async function () {
    // code for saving the product name and price
    this.productTitle = await productPage.productTitle.getText()
    this.productPrice = await productPage.productPrice.getText()
    
    // and then we click the button
    await productPage.addToCartButton.click()
})

When('I click on the Cart', async function () {
    await expect(headerPage.counterNumber).toHaveText('1')
    await headerPage.cartButton.click()
});

When('I click the Proceed to Checkout button', async function () {
    await headerPage.proceedToCheckout.click()
});

When('I select Flat Rate shipping method', async function () {
    this.shippingPrice = await shippingPage.flatRatePrice.getText();
    await shippingPage.flatRateRadio.click();
});
When('I click the Next button', async function () {
    await shippingPage.nextButton.click()
});
When('I click Place Order button', async function () {
    await reviewPage.placeOrderButton.click()
});
When('I open the order link', async function () {
    this.orderNumber = await checkoutPage.orderNumberLink.getText()
    await checkoutPage.orderNumberLink.click()
});
Then('A correct order information is displayed', async function () {
    // const pageTitleText = await orderPage.pageTitle.getText()
    await expect(orderPage.pageTitle).toHaveText(expect.stringContaining(this.orderNumber))
    await expect(orderPage.firstProductName).toHaveText(this.productTitle)
    await expect(orderPage.firstProductPrice).toHaveText(this.productPrice)
    await expect(orderPage.firstProductQuantity).toHaveText("1")
    await expect(orderPage.firstProductSubtotal).toHaveText(this.productPrice)
    await expect(orderPage.subTotal).toHaveText(this.productPrice)
    await expect(orderPage.shippingPrice).toHaveText(this.shippingPrice)

    const expectedGrandTotal = priceStringToNumber(await orderPage.subTotal.getText()) + priceStringToNumber(await orderPage.shippingPrice.getText())
    await expect(orderPage.grandTotal).toHaveText(`$${expectedGrandTotal.toFixed(2)}`)
});