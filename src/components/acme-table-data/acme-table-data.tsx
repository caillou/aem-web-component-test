import { Component, Element } from '@stencil/core';

@Component({
  tag: 'acme-table-data',
  styleUrl: 'acme-table-data.css',
  shadow: true
})
export class AcmeTableData {
  @Element() private element: HTMLElement;

  componentDidLoad() {
    this.element.setAttribute('role', 'table-cell')
    this.element.style.display = 'table-cell'
  }

  render() {
    return (
      <slot/>
    );
  }
}
