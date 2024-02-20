import { Page } from "./page.js";
import { browser } from "@wdio/globals";

class SignInPage extends Page {
    input(title) { return $(`input[title="${title}"]`)}
    
    get signInButton() {return $('#send2.login')}
}

export default new SignInPage()