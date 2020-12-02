Feature: Login    
    In order to login to the application    
    As a User    
    I need to enter the Valid username and Password    
    
    Scenario: In order to login to the angular app    
        Given open the application "http://www.way2automation.com/angularjs-protractor/registeration/#/login"   
        When user login with "angular" and "password"  
        And User enters the Admin "TestUser"  
        Then user should login succcessfully 

    @TitleTest
    Scenario: In order to get the titile of the page  
        Given open the application "http://localhost:4200/"  
        Then user validates the title as "Testellicence" 
        And user enters "First Name" as "Binesh"
        And user enters "Last Name" as "Binesh"
        And user enters "Email" as "Binesh"
        And user enters "Mobile" as "Binesh"
        And user enters "Password" as "Binesh"
        And user enters "Confirm Password" as "Binesh"
