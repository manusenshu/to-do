import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  gender: string;
  country: string;

  countries: string[] = ['Korea', 'Japan', 'USA', 'London', 'Philippines', 'Thailand'];
  
  users: any[] = [
    { name: 'Kristy', gender: 'female', country: 'Korea' },
    { name: 'Nick', gender: 'male', country: 'Japan' },
    { name: 'Ariana', gender: 'female', country: 'USA' },
    { name: 'Joe', gender: 'male', country: 'London' },
    { name: 'Albert', gender: 'male', country: 'Philippines' },
  ];

}