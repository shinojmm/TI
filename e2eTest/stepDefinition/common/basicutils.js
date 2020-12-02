var {Given, When, Then, Before} = require('cucumber');   
var expect = require ('chai').expect; 
const { browser, element } = require('protractor');  
const GenerateUserControlIdentifier = require ('../../util/webUI/userControlEngine');
var userIdentifier;
    
Given(/^open the application "([^"]*)"$/, async (appUrl) =>
{  
    await browser.manage().window().maximize(); 
    await browser.get(appUrl);  
}); 

Given('user validates the title as {string}', async (expectedTitle) => 
{
  var title = await browser.getTitle(); 
  console.log(title);
  expect(title).to.equal(expectedTitle);
  
});

Then('user enters {string} as {string}', async (userControl, data) =>
{
  userIdentifier = new GenerateUserControlIdentifier();
  var ele = await userIdentifier.getUserControlIdentifier(userControl,"textbox");
  await ele.sendKeys(data);
  
});
  
