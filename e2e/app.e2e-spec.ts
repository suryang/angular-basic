import { Angular5Test1Page } from './app.po';

describe('angular5-test1 App', function() {
  let page: Angular5Test1Page;

  beforeEach(() => {
    page = new Angular5Test1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
