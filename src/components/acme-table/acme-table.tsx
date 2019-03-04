import { Component } from '@stencil/core';


@Component({
  tag: 'acme-table',
  styleUrl: 'acme-table.css',
  shadow: true
})
export class AcmeTable {

  render() {
    return (
      <div class="table" role="">
        <slot/>
      </div>
    );
  }
}
