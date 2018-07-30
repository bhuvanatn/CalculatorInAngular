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
    page.getPlusButton().click();
    expect(page.getResultValue()).toEqual('10');
  });
  it('should add numbers but  Test Fails ', () => {
    page.navigateTo();
    page.getInputValues();
    page.getPlusButton().click();
    expect(page.getResultValue()).toEqual('11');
  });

  it('should Substract numbers', () => {
    page.navigateTo();
    page.getInputValues();
    page.getMinusButton().click();
    expect(page.getResultValue()).toEqual('0');
  });
  it('should Substract numbers but  Test Fails', () => {
    page.navigateTo();
    page.getInputValues();
    page.getMinusButton().click();
    expect(page.getResultValue()).toEqual('10');
  });

  it('should Multiply numbers', () => {
    page.navigateTo();
    page.getInputValues();
    page.getMultiButton().click();
    expect(page.getResultValue()).toEqual('25');
  });
  it('should Multiply numbers but Test Fails', () => {
    page.navigateTo();
    page.getInputValues();
    page.getMultiButton().click();
    expect(page.getResultValue()).toEqual('10');
  });

  it('should Divide numbers', () => {
    page.navigateTo();
    page.getInputValues();
    page.getDivideButton().click();
    expect(page.getResultValue()).toEqual('1');
  });

  it('should Divide numbers but Test Fails', () => {
    page.navigateTo();
    page.getInputValues();
    page.getDivideButton().click();
    expect(page.getResultValue()).toEqual('10');
  });
});
