import { Projectzero12clientPage } from './app.po';

describe('projectzero12client App', function() {
  let page: Projectzero12clientPage;

  beforeEach(() => {
    page = new Projectzero12clientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
