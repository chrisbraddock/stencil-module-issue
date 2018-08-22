import { Component, Prop } from '@stencil/core';

import log4js from 'log4js';
var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");

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
