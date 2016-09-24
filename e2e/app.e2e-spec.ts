import { Fb13Page } from './app.po';

describe('fb13 App', function() {
  let page: Fb13Page;

  beforeEach(() => {
    page = new Fb13Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
