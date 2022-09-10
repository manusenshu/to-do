import { Component, OnInit } from '@angular/core';
import { PendientesService } from "../pendientes.service"
import { Pendiente } from "../pendiente"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-pendientes',
  templateUrl: './listar-pendientes.component.html',
  styleUrls: ['./listar-pendientes.component.css']
})
export class ListarPendientesComponent implements OnInit {
  private pendientes: Pendiente[] = [
    new Pendiente("Maggie", "Chihuahua", 20)
  ];

  constructor(private pendientesService: PendientesService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarPendiente(pendiente: Pendiente) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${pendiente.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.pendientesService
          .deletePendiente(pendiente)
          .subscribe(() => {
            this.obtenerPendientes();
            this.snackBar.open('Pendiente eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerPendientes();
  }

  obtenerPendientes() {
    return this.pendientesService
      .getPendientes()
      .subscribe((pendientes: Pendiente[]) => this.pendientes = Pendientes);
  }

}
