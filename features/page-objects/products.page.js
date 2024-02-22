import { Page } from "./page.js";

class ProductsPage extends Page {
    get firstProductPhoto() {return $('.product-image-photo')}
}

export default new ProductsPage();
