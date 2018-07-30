import { AppPage } from "./app.po";
import { browser, by, element } from "protractor";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Calculator");
  });


  it('should add numbers', () => {
    page.navigateTo();
    page.getInputValues();
    // element(by.model('num1')).sendKeys(4);
    // element(by.model('num2')).sendKeys(5);
    page.getPlusButton().click();

    expect(element(by.binding('result')).getText()).
        toEqual('9');
  });
});
