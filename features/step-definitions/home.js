import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../page-objects/home.page.js";

Given ('I am on the home page', async function(){
    await homePage.open()
})

Then ('I see the welcome message {string}', async function(message){
    await expect(homePage.greetMessage).toHaveText(message)
})