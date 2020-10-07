import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  clickabutton(btn){
    btn.click();
  }
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
