import { AngularUniversalDemoPage } from './app.po';

describe('angular-universal-demo App', () => {
  let page: AngularUniversalDemoPage;

  beforeEach(() => {
    page = new AngularUniversalDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
