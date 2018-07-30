import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getParagraphText() {
    return element(by.css("app-root h1")).getText();
  }
  getInputValues() {
    return (element(by.css("#number1")).sendKeys(5),
      element(by.css("#number2")).sendKeys(5)
    );
  }
  getResultValue(){
    return element(by.css("#result")).getText();
  }
  getPlusButton() {
    return element(by.cssContainingText("button", "Add +"));
  }
  getMinusButton() {
    return element(by.cssContainingText("button", "Sub -"));
  }
  getMultiButton() {
    return element(by.cssContainingText("button", "Multi *"));
  }
  getDivideButton() {
    return element(by.cssContainingText("button", "Division /"));
  }

}
