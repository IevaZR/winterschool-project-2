export class Page {
    get cartButton() { return $('.showcart') }
    get proceedToCheckout(){return $('#top-cart-btn-checkout')}
}

export default new Page()