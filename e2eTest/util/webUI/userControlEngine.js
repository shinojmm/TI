const { browser, element } = require('protractor'); 

class GenerateUserControlIdentifier
{
    getUserControlIdentifier = async(userControl,type)=>
    {
        switch(type)
        {
            case "textbox":
                var parentElement = await browser.findElement(by.xpath("//label[contains(text(),'"+userControl+"')]"));
                return await parentElement.findElement(by.xpath('..')).findElement(by.tagName('input'));
                break;
        }
    }
   
}
module.exports = GenerateUserControlIdentifier;
