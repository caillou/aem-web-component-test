import { Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'acme-name',
  styleUrl: 'acme-name.css',
  shadow: true
})
export class AcmeName {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
