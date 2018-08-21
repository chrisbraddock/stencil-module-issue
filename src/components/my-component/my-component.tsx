import { Component, Prop } from '@stencil/core';
import axios from 'axios';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  componentDidLoad() {
    console.log('Component has been rendered');
    // @ts-ignore
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      console.log('response', response)
    })
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
