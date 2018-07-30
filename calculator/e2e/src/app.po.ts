import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getParagraphText() {
    return element(by.css("app-root h1")).getText();
  }
getInputValues(){
  return (
    element(by.model('num1')).sendKeys(4),
    element(by.model('num2')).sendKeys(5)
  );
}
  getPlusButton() {
    return element(by.cssContainingText("button", "Add +"));
  }
  getInput1value() {
    element(by.model("num1")).sendKeys("12");
  }
}
