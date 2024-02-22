import { Page } from "./page.js";
import { browser } from "@wdio/globals";

class ShippingPage extends Page {
    get flatRateRadio() {
        return $('//td[text()="Flat Rate"]/parent::tr//input');
    }
    get flatRatePrice() {
        return $('//td[text()="Flat Rate"]/parent::tr//span[@class="price"]');
    }
    get nextButton() {
        return $('button[data-role="opc-continue"');
    }
}

export default new ShippingPage();
