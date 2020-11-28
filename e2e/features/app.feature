Feature: App page

    Scenario: First scenario
        Given I open app page
        When app page loads
        Then header "Welcome to Testellicence!" is displayed

    Scenario: Second scenario
        Given I open app page
        When I type "TypeScript"
        Then header "Welcome to Testellicence!" is displayed