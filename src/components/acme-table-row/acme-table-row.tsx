import { Component, Element } from '@stencil/core';

@Component({
  tag: 'acme-table-row',
  styleUrl: 'acme-table-row.css',
  shadow: true
})
export class AcmeTableRow {
  @Element() private element: HTMLElement;

  componentDidLoad() {
    this.element.setAttribute('role', 'table-row')
    this.element.style.display = 'table-row'
  }

  render() {
    return (
      <slot/>
    );
  }
}
