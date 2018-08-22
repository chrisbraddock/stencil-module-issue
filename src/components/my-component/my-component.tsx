import { Component, Prop } from '@stencil/core';
import dotenv from 'dotenv'
dotenv.config()

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    console.log('******************************');
    console.log(`process dot env dot FOO: ${process.env.FOO}`);
    console.log('******************************');
    return (
      <div>
        process dot env dot FOO:  {process.env.FOO}
      </div>
    );
  }
}
