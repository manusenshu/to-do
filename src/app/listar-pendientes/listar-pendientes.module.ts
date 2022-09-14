import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ListarPendientesComponent } from './listar-pendientes.component';

import { TableFilterPipe } from './table-filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ListarPendientesComponent, TableFilterPipe, TableFilter ],
  bootstrap:    [ ListarPendientesComponent ]
})
export class ListarPendientesModule { }
