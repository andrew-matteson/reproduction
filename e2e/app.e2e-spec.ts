import { ReproductionPage } from './app.po';

describe('reproduction App', () => {
  let page: ReproductionPage;

  beforeEach(() => {
    page = new ReproductionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
