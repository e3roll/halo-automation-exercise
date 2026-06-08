Feature: Purchase and Invoice Download
  
  @e2e
  Scenario: Download invoice after completing a purchase
    Given I am on the home page
    When I open the first product page
    And I add the product to the cart
    Then I should be on the cart page
    When I proceed to checkout
    And I click Register Login on the checkout prompt
    And I enter name "Invoice Buyer" and email "invoicebuyer@testmail.com"
    And I fill in account information with password "Test@1234" and date of birth "1" "January" "1990"
    And I fill in address information
    And I click Create Account
    Then I should see the "ACCOUNT CREATED!" heading
    When I click Continue
    And I view the cart
    And I proceed to checkout
    Then I should see address details and order review
    When I place the order with comment "Test purchase for invoice"
    And I confirm payment with card details
    Then I should see the order placed successfully message
    When I download the invoice
    And I click Continue
    And I delete the account
    Then I should see the "ACCOUNT DELETED!" heading
