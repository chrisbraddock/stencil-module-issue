import { Component, Prop } from '@stencil/core';
import dotenv from 'dotenv'
dotenv.config({ path: '/Users/e071111/Documents/repos/stencil-module-issue/src/.env' })
// require('dotenv').config()

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    console.log('>>>>>');
    console.log(process.env.FOO)
    console.log('>>>>>');
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
