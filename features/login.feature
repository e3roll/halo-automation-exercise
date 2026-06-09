Feature: User Login

  Background:
    Given I am on the home page

  @smoke
  Scenario: TC02 - Login User with Correct Credentials
    When I click on Signup Login
    Then I should see the "Login to your account" title
    When I login with email "halo@testmail.com" and password "halotest"
    Then I should be logged in as "Halo"
    When I click Logout
    Then I should be on the login page

  Scenario: TC03 - Login User with Incorrect Credentials
    When I click on Signup Login
    Then I should see the "Login to your account" title
    When I login with email "wrong@testmail.com" and password "wrongpassword"
    Then I should see the login error "Your email or password is incorrect!"
