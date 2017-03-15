import { BingCMSPage } from './app.po';

describe('bing-cms App', function() {
  let page: BingCMSPage;

  beforeEach(() => {
    page = new BingCMSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
