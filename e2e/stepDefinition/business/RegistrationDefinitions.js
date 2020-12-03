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


Then('user fills the registration details', async (dataTable)=> {
  var formVals = await dataTable.rowsHash();
  await element(by.id('Fname')).sendKeys(formVals['First Name']);
  await element(by.name('Lname')).sendKeys(formVals['Last Name']);
  await element(by.id('email')).sendKeys(formVals['Email']);
  await element(by.id('mobile')).sendKeys(formVals['Mobile']);
  await element(by.id('pass_word')).sendKeys(formVals['Password']);
  await element(by.id('pass_word_confirm')).sendKeys(formVals['Confirm Password']);
  await element(by.id('gender')).$('[value='+formVals['Gender']+']').click();
  
  
});