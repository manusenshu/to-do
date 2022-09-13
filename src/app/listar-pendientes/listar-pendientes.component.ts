import { Component, OnInit } from '@angular/core';
import { PendientesService } from '../Pendientes.service';
import { Pendiente } from '../Pendiente';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-Pendientes',
  templateUrl: './listar-Pendientes.component.html',
  styleUrls: ['./listar-Pendientes.component.css'],
})
export class ListarPendientesComponent implements OnInit {
  inicio = new Date('2022-09-06');
  public Pendientes: Pendiente[] = [
    new Pendiente(
      'app to-do',
      'a simple personal task sheduler',
      this.inicio,
      undefined,
      undefined,
      undefined,
      undefined
    ),
  ];

  constructor(
    private PendientesService: PendientesService,
    private dialogo: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  tomarPendiente(Pendiente: Pendiente) {
    var toDo;
    switch(Pendiente.estado) { 
      case 1: { 
         //statements; 
         break; 
      } 
      case 2: { 
         //statements; 
         break; 
      } 
      case 3: { 
        toDo = '¿Deseas abrir nuevamente ' + Pendiente.titulo + '?';
         break; 
      } 
      default: { 
         toDo = '¿Deseas abrir nuevamente ' + Pendiente.titulo + '?';
         break; 
      } 
   } 

    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: toDo,
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.PendientesService.takePendiente(Pendiente).subscribe(() => {
          this.obtenerPendientes();
          this.snackBar.open('Pendiente eliminado', undefined, {
            duration: 1500,
          });
        });
      });
  }

  eliminarPendiente(Pendiente: Pendiente) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar ${Pendiente.titulo}?`,
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.PendientesService.deletePendiente(Pendiente).subscribe(() => {
          this.obtenerPendientes();
          this.snackBar.open('Pendiente eliminado', undefined, {
            duration: 1500,
          });
        });
      });
  }

  ngOnInit() {
    this.obtenerPendientes();
  }

  obtenerPendientes() {
    return this.PendientesService.getPendientes().subscribe(
      (Pendientes: Pendiente[]) => (this.Pendientes = Pendientes)
    );
  }
}
