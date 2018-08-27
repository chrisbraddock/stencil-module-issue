import { Component, Prop } from '@stencil/core';

/***********/
/* WORKS ! */
/***********/
// import api from './api';

/******************/
/* DOESN'T WORK ! */
/******************/
import api from '../../../api/dist/api';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {

    api('https://jsonplaceholder.typicode.com/todos/1').then(results => {
      console.log('results', results);
    });

    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
