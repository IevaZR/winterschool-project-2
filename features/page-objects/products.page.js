import { Page } from "./page.js";

class ProductsPage extends Page {
    get firstProductPhoto() {return $('.products .product-image-photo')}
    // or we could use $$ to get all elements with the same class and then go over and find the first visible element (because others were hidden here)
}

export default new ProductsPage();
