import { Component, Input } from '@angular/core';

@Component({
  selector: 'headLine',
  template: `<h1>{{name}} a simple personal task sheduler</h1>`,
  styles: [
    `h1 { font-family: Lato;
    margin-top=0px;
   }`,
  ],
})
export class HeadComponent {
  @Input() name: string;
}
