Feature: User Logout

  Scenario: TC04 - Logout User
    Given I am on the home page
    When I click on Signup Login
    Then I should see the "Login to your account" heading
    When I login with email "halo@testmail.com" and password "Halo@1234"
    Then I should be logged in as "Halo"
    When I click Logout
    Then I should be on the login page
