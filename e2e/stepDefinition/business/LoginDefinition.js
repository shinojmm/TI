var {Given, When, Then, Before} = require('cucumber');    
const { browser, element } = require('protractor');  
  
    
When('user login with {string} and {string}', async (string, string2)=> {  
  // Write code here that turns the phrase above into concrete actions  
  await element(by.model('Auth.user.name')).sendKeys(string);  
  await element(by.model('Auth.user.password')).sendKeys(string2);  
  await  console.log("entered the user name and password");  
});  
  
When('User enters the Admin {string}', async (string) =>{  
  // Write code here that turns the phrase above into concrete actions  
  await element(by.model('model[options.key]')).sendKeys(string);  
  await  console.log("enetered the logged in user name");  
    
});  
Then('user should login succcessfully', async ()=> {  
  // Write code here that turns the phrase above into concrete actions  
  await  console.log("success");  
});  