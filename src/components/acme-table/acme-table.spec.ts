import { TestWindow } from '@stencil/core/testing';
import { AcmeTable } from './acme-table';

describe('acme-table', () => {
  it('should build', () => {
    expect(new AcmeTable()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAcmeTableElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AcmeTable],
        html: '<acme-table>'
          + '</acme-table>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
