import { NextechPage } from './app.po';

describe('nextech App', () => {
  let page: NextechPage;

  beforeEach(() => {
    page = new NextechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
