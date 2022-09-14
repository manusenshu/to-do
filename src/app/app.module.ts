import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarPendienteComponent } from './agregar-pendiente/agregar-pendiente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { ListarPendientesComponent } from './listar-pendientes/listar-pendientes.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditarPendienteComponent } from './editar-pendiente/editar-pendiente.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

import { TableFilterPipe } from './table-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgregarPendienteComponent,
    ListarPendientesComponent,
    DialogoConfirmacionComponent,
    EditarPendienteComponent,
    AcercaDeComponent,
    ListarPendientesComponent, 
    TableFilterPipe
  ],
  entryComponents: [DialogoConfirmacionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

export class ListarPendientesModule { }

