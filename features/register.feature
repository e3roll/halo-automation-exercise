Feature: User Registration
Background:
  Given I am on the home page

  Scenario: TC01 - Register User
    When I click on Signup Login
    Then I should see the "New User Signup!" heading
    When I enter name "John Doe" and email "johndoe_tc01@testmail.com"
    Then I should see the "ENTER ACCOUNT INFORMATION" heading
    When I fill in account information with password "Test@1234" and date of birth "1" "January" "1990"
    And I fill in address information
    And I click Create Account
    Then I should see the "ACCOUNT CREATED!" heading
    When I click Continue
    Then I should be logged in as "John Doe"
    When I delete the account
    Then I should see the "ACCOUNT DELETED!" heading

  Scenario: TC05 - Register User with Existing Email
    When I click on Signup Login
    Then I should see the "New User Signup!" heading
    When I enter name "Jane Doe" and email "existing@testmail.com"
    Then I should see the error "Email Address already exist!"
