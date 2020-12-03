Feature: Login    
    In order to login to the application    
    As a User    
    I need to enter the Valid username and Password    
    
    Scenario: In order to login to the angular app    
        Given open the application "http://www.way2automation.com/angularjs-protractor/registeration/#/login"   
        When user login with "angular" and "password"  
        And User enters the Admin "TestUser"  
        Then user should login succcessfully 

    @TestUserControls
    Scenario: In order to get the titile of the page  
        Given open the application "http://localhost:4200/"  
        Then user validates the title as "Testellicence" 
        And user enters "First Name" as "Binesh"
        And user enters "Last Name" as "Subramanian"
        And user enters "Email" as "binesh.s3@cognizant.com"
        And user enters "Mobile" as "07443809509  "
        And user enters "Password" as "Test@1234"
        And user enters "Confirm Password" as "Test@1234"
        And user selects "Female" from the "Gender" dropdown

    @TestBusinessProcessComponent
    Scenario: In order to get the titile of the page  
        Given open the application "http://localhost:4200/"  
        Then user validates the title as "Testellicence" 
        And user fills the registration details
        |First Name         | Binesh                    |
        |Last Name          | Subramanian               |
        |Email              | binesh.s3@cognizant.com   |
        |Mobile             | 07443809509               |
        |Password           | Test@1234                 |
        |Confirm Password   | Test@1234                 |                           
