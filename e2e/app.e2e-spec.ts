import { AngularBootstrapTestPage } from './app.po';

describe('angular-bootstrap-test App', () => {
  let page: AngularBootstrapTestPage;

  beforeEach(() => {
    page = new AngularBootstrapTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
