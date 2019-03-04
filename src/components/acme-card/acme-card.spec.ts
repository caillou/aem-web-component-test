import { TestWindow } from '@stencil/core/testing';
import { AcmeCard } from './acme-card';

describe('acme-card', () => {
  it('should build', () => {
    expect(new AcmeCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAcmeCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AcmeCard],
        html: '<acme-card>' 
          + '</acme-card>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
