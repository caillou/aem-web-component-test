import { TestWindow } from '@stencil/core/testing';
import { AcmeTableRow } from './acme-table-row';

describe('acme-table-row', () => {
  it('should build', () => {
    expect(new AcmeTableRow()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAcmeTableRowElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AcmeTableRow],
        html: '<acme-table-row>' 
          + '</acme-table-row>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
