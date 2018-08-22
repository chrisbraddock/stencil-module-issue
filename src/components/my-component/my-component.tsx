import { Component, Prop } from '@stencil/core';
import winston from 'winston'

// @ts-ignore
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    {
      format: winston.format.simple()
    }
  ]
});

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {

    logger.log({
      level: 'info',
      message: 'Hello distributed log files!'
    });

    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
