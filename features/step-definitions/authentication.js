import { Given, When, Then } from "@wdio/cucumber-framework";
import homePage from "../page-objects/home.page.js";
import signinPage from "../page-objects/signin.page.js";
import myAccountPage from "../page-objects/my-account.page.js";
import { users } from "../test-data/users.js";
// import {AllureReporter} from 

When("I press on the Sign In link", async function () {
    await homePage.signInLink.click();
});
When(
    "I enter {string} into {word} input field",
    async function (text, inputTitle) {
        await signinPage.input(inputTitle).setValue(text);
    }
);

When("I click the Sign In button", async function () {
    await signinPage.signInButton.click();
});

Then("My account page contains email {string}", async function (email) {
    await homePage.selectUserDropdown("My Account");
    await expect(myAccountPage.contactInformationContent).toHaveText(
        expect.stringContaining(email)
    );
});

Given("I have logged in as {word}", async function (userName) {
    if (!Object.keys(users).includes(userName)) {
        throw Error(`User ${userName} is not recognized`)
    }
    const user = users[userName]
    // AllureReporter.addArgument('user', user)
    // we added argument user to see it in the report
    await homePage.signInLink.click();
    await signinPage.input("Email").setValue(user.email);
    await signinPage.input("Password").setValue(user.password);
    await signinPage.signInButton.click();
    const expectedGreetMessage = `Welcome, ${user.firstName} ${user.lastName}!`
    await expect(homePage.greetMessage).toHaveText(expectedGreetMessage);
});
