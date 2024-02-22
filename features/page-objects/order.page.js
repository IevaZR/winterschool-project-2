import { Page } from "./page.js";

class OrderPage extends Page {
    get pageTitle(){return $('.page-title')}
    get firstProductName(){return $('table .product-item-name')}
    get firstProductSize(){return $('//td[@stat-th="Size"]//*[text()="Size"]/following-sibling::*')}
    get firstProductColor(){return $('//td[@stat-th="Color"]//*[text()="Size"]/following-sibling::*')}
    get firstProductPrice(){return $('.price .cart-price')}
    get firstProductQuantity(){return $('.items-qty .content')}
    get firstProductSubtotal(){return $('.subtotal .cart-price')}
    get subTotal(){return $('.subtotal [data-th="Subtotal"]')}
    get shippingPrice(){return $('[data-th="Shipping & Handling"]')}
    get grandTotal(){return $('[data-th="Grand Total"]')}
}

export default new OrderPage()