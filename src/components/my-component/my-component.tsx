import { Component, Prop } from '@stencil/core';

import debug from 'debug'

// debugging set in localStorage, do this in console:
// localStorage.debug = 'worker/:*'
const a = debug('worker:a');
const b = debug('worker:b');

a('debug message from a');
b('debug message from b');

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
