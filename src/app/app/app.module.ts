import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TableFilterPipe } from './table-filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TableFilterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
