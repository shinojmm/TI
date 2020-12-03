const { browser, element } = require('protractor'); 

class GenerateUserControlIdentifier
{
    getUserControlIdentifier = async(userControl,type)=>
    {
        var elementIdentifier;
        switch(type)
        {
            case "textbox":
                elementIdentifier = await browser.findElement(by.xpath("//label[contains(text(),'"+userControl+"')]"));
                return await elementIdentifier.findElement(by.xpath('..')).findElement(by.tagName('input'));
                break;

            case "dropdown":
                elementIdentifier = await browser.findElement(by.xpath("//label[contains(text(),'"+userControl+"')]"));
                return await elementIdentifier.findElement(by.xpath('..')).findElement(by.tagName('select'));
                break;
            }
    }
   
}
module.exports = GenerateUserControlIdentifier;
