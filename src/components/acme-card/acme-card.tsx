import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'acme-card',
  styleUrl: 'acme-card.css'
})
export class AcmeCard {
  @Prop() href: string;
  @Prop() heading: string;
  @Prop() img: string;

  render() {
    return (
      <a href={this.href}>
        <h1>
          {this.heading}
        </h1>
        {this.img &&
          <img src={this.img}></img>
        }
        <div>
          <slot/>
        </div>
      </a>
    );
  }
}
