import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../css/estilo.css',
    '../../css/preview.css',
    '../../css/css2.css',
    '../../css/montserrat.css',
  ],
})
export class AppComponent {
  name = 'TO-DO';
}
