import { KopenBijDeBoerPage } from './app.po';

describe('kopen-bij-de-boer App', () => {
  let page: KopenBijDeBoerPage;

  beforeEach(() => {
    page = new KopenBijDeBoerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
