import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'acme-card',
  styleUrl: 'acme-card.css'
})
export class AcmeCard {
  @Prop() href: string;
  @Prop() heading: string;


  render() {
    return (
      <a href={this.href}>
        <h1>
          {this.heading}
        </h1>
        <div>
          <slot/>
        </div>
      </a>
    );
  }
}
