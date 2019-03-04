import { TestWindow } from '@stencil/core/testing';
import { AcmeTableData } from './acme-table-data';

describe('acme-table-data', () => {
  it('should build', () => {
    expect(new AcmeTableData()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAcmeTableDataElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AcmeTableData],
        html: '<acme-table-data>' 
          + '</acme-table-data>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
