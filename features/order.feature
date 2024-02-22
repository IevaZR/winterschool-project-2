Feature: Orders

@orders
  Scenario: TODO
    # the first step does everything that the login scenario does
    Given I am on the home page
    And I have logged in as David
    And I have no items in my Cart
    When I select "Women -> Tops -> Jackets" menu item
    And I click on a product
    And I select size and color
    And I click the Add to Card button
    And I click on the Cart
    And I click the Proceed to Checkout button
    And I select Flat Rate shipping method
    And I click the Next button
    And I click Place Order button
    And I open the order link
    Then A correct order information is displayed
