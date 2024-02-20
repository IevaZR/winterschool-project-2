Feature: Login

    Scenario: User can log in using valid credentials
        Given I am on the home page
        When I press on the Sign In link
        And I enter "david.smith@gmail.com" into Email input field
        And I enter "David@123" into Password input field
        And I click the Sign In button
        Then I see the welcome message "Welcome, David Smith!"
        And My account page contains email "david.smith@gmail.com"