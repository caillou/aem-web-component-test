import { TestWindow } from '@stencil/core/testing';
import { AcmeName } from './acme-name';

describe('acme-name', () => {
  it('should build', () => {
    expect(new AcmeName()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAcmeNameElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AcmeName],
        html: '<acme-name>' 
          + '</acme-name>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
