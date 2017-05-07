import { BookClientAppPage } from './app.po';

describe('book-client-app App', () => {
  let page: BookClientAppPage;

  beforeEach(() => {
    page = new BookClientAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
