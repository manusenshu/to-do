import { Component, OnInit } from '@angular/core';
import { PendientesService } from '../pendientes.service';
import { Pendiente } from '../pendiente';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar-pendientes',
  templateUrl: './listar-pendientes.component.html',
  styleUrls: ['./listar-pendientes.component.css'],
})

export class ListarPendientesComponent implements OnInit {

  estado: string;
  cierre: string;
  cierres: string[] = ['2022-09-09', '2022-09-10', '2022-09-11', '2022-09-12', '2022-09-13', '2022-09-14'];

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

  getColor(estado) {
    switch (estado) {
      case '0':
        return 'lightblue';
      case '1':
        return 'blue';
      case '2':
        return 'green';
    }
  }

  tomarPendiente(Pendiente: Pendiente) {
    var toDo = '¿Deseas abrir nuevamente ' + Pendiente.titulo + '?';
    var does = 'Has abierto nuevamente el pendiente ' + Pendiente.titulo + '!';
    if (Pendiente.estado == 0) {
      toDo = '¿Deseas tomar el pendiente ' + Pendiente.titulo + '?';
      does = 'Has tomado el pendiente' + Pendiente.titulo + '!';
    }
    if (Pendiente.estado == 1) {
      toDo = '¿Deseas finalizar ' + Pendiente.titulo + '?';
      does = 'Has finalizado el pendiente' + Pendiente.titulo + '!';
    }
    if (Pendiente.estado == 2) {
      toDo = '¿Deseas abrir nuevamente ' + Pendiente.titulo + '?';
      does = 'Has abierto nuevamente el pendiente ' + Pendiente.titulo + '!';
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
          this.snackBar.open(does, undefined, {
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
