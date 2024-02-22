import { Page } from "./page.js";

class ReviewPage extends Page {
    get placeOrderButton() { return $(`button[title="Place Order"]`) }
}                                     

export default new ReviewPage();
