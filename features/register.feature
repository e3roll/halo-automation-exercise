Feature: User Registration

  Background:
    Given I am on the home page

  Scenario: TC01 - Register User
    When I click on Signup Login
    Then I should see the "New User Signup!" title
    When I enter name "Random User" and email "randomuser@testmail.com"
    Then I should see the "ENTER ACCOUNT INFORMATION" title
    When I fill in account information with password "halotest" and date of birth "1" "January" "1990"
    And I fill in address information
      | firstName | Random         |
      | lastName  | User           |
      | company   | Test Corp      |
      | address1  | 123 Test St    |
      | address2  | Suite 4        |
      | country   | United States  |
      | state     | California     |
      | city      | Los Angeles    |
      | zipcode   | 90001          |
      | mobile    | 5551234567     |
    And I click Create Account
    Then I should see the "ACCOUNT CREATED!" title
    When I click Continue
    Then I should be logged in as "Random User"
    When I delete the account
    Then I should see the "ACCOUNT DELETED!" title
