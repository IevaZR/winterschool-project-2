import { Page } from "./page.js";

class CheckoutPage extends Page {
    get orderNumberLink() { return $('.order-number') }
}

export default new CheckoutPage();