import { AdventureGazePage } from './app.po';

describe('adventure-gaze App', () => {
  let page: AdventureGazePage;

  beforeEach(() => {
    page = new AdventureGazePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
