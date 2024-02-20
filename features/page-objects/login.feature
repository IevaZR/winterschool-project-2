Feature: Login

    Scenario: User can log in using valid credentials
        Given I am on the home page
        When I press on the Sign In link
        And I enter email "david.smith@gmail.com"
        And I enter password "David@123"
        And I click the Sign In button
        Then I see the welcome message "Welcome, David Smith!"
        Then My account page contains email "david.smith@gmail.com"