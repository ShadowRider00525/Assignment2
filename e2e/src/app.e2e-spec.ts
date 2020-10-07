import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.waitForAngularEnabled(false);
    expect(page.getTitleText()).toEqual('Assignment2');
  });

  it('should display sent message', () => {
    page.navigateTo();
    browser.waitForAngularEnabled(false);
    var messageinput = element(by.id('messagecontent'));
    var chatbtn = element(by.id('chatbtn'));
    messageinput.sendKeys('test-message');
    page.clickabutton(chatbtn);
    browser.driver.sleep(1000);
    var listitems = element.all(by.css('li'));
      expect(listitems.get(0).getText()).toEqual('test-message');
  });

  it('log user', () =>{
    page.navigateTo();
    browser.waitForAngularEnabled(false);
    
  })
});
