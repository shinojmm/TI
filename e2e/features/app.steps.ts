import { Given, Before, When, Then } from 'cucumber';
import { browser, element, by, ExpectedConditions } from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { AppPage } from './app.po';
import { async } from '@angular/core/testing';
const expect = chai.use(chaiAsPromised).expect;

let appPage: AppPage = new AppPage();

Given('I open a page', function () {
  return browser.get('/').then(() => {
    element(by.css('h1')).getText()
      .then(text => {
        expect(text).to.have.string("Welcome to Testellicence!")
      })
  });
});

Before(() => {
  appPage = new AppPage();
});

Given('I open app page', () => {
  appPage.navigateTo();
});

When('app page loads', () => {
  return browser.wait(ExpectedConditions.visibilityOf(appPage.getTitle()), 5000);
});

Then('header {string} is displayed', (title) => {
  return appPage.getParagraphText()
    .then(text => {
      expect(text).to.have.string(title)
    })
});

When(/^I type "(.*?)"$/, async (text) {
  var qty = element(by.xpath("//div[@class='ui-grid-row ng-scope'"));
  qty.sendKeys(text);
});