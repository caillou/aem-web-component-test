/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AcmeTableData {}
  interface AcmeTableDataAttributes extends StencilHTMLAttributes {}

  interface AcmeTableRow {}
  interface AcmeTableRowAttributes extends StencilHTMLAttributes {}

  interface AcmeTable {}
  interface AcmeTableAttributes extends StencilHTMLAttributes {}

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AcmeTableData': Components.AcmeTableData;
    'AcmeTableRow': Components.AcmeTableRow;
    'AcmeTable': Components.AcmeTable;
    'MyComponent': Components.MyComponent;
  }

  interface StencilIntrinsicElements {
    'acme-table-data': Components.AcmeTableDataAttributes;
    'acme-table-row': Components.AcmeTableRowAttributes;
    'acme-table': Components.AcmeTableAttributes;
    'my-component': Components.MyComponentAttributes;
  }


  interface HTMLAcmeTableDataElement extends Components.AcmeTableData, HTMLStencilElement {}
  var HTMLAcmeTableDataElement: {
    prototype: HTMLAcmeTableDataElement;
    new (): HTMLAcmeTableDataElement;
  };

  interface HTMLAcmeTableRowElement extends Components.AcmeTableRow, HTMLStencilElement {}
  var HTMLAcmeTableRowElement: {
    prototype: HTMLAcmeTableRowElement;
    new (): HTMLAcmeTableRowElement;
  };

  interface HTMLAcmeTableElement extends Components.AcmeTable, HTMLStencilElement {}
  var HTMLAcmeTableElement: {
    prototype: HTMLAcmeTableElement;
    new (): HTMLAcmeTableElement;
  };

  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLElementTagNameMap {
    'acme-table-data': HTMLAcmeTableDataElement
    'acme-table-row': HTMLAcmeTableRowElement
    'acme-table': HTMLAcmeTableElement
    'my-component': HTMLMyComponentElement
  }

  interface ElementTagNameMap {
    'acme-table-data': HTMLAcmeTableDataElement;
    'acme-table-row': HTMLAcmeTableRowElement;
    'acme-table': HTMLAcmeTableElement;
    'my-component': HTMLMyComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
