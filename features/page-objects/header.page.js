import { Page } from "./page.js";
import { browser } from "@wdio/globals";

class HeaderPage extends Page {
    get cartButton() { return $('.showcart') }
    get proceedToCheckout(){return $('#top-cart-btn-checkout')}
    get counterNumber(){return $('.counter-number')}
}

export default new HeaderPage();