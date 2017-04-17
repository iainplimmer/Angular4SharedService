import { SynclistPage } from './app.po';

describe('synclist App', () => {
  let page: SynclistPage;

  beforeEach(() => {
    page = new SynclistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
