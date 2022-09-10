import { Component, OnInit } from '@angular/core';
import { PedientesService } from '../pedientes.service';
import { Pediente } from '../pediente';
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-pedientes',
  templateUrl: './listar-pedientes.component.html',
  styleUrls: ['./listar-pedientes.component.css'],
})
export class ListarPedientesComponent implements OnInit {
  inicio = new Date('2022-09-06')
  public Pedientes: Pediente[] = [new Pediente('app to-do', 'a simple personal task sheduler', this.inicio, undefined, undefined, undefined, undefined)];

  constructor(
    private PedientesService: PedientesService,
    private dialogo: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  eliminarPediente(Pediente: Pediente) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${Pediente.titulo}?`,
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.PedientesService.deletePediente(Pediente).subscribe(() => {
          this.obtenerPedientes();
          this.snackBar.open('Pediente eliminada', undefined, {
            duration: 1500,
          });
        });
      });
  }

  ngOnInit() {
    this.obtenerPedientes();
  }

  obtenerPedientes() {
    return this.PedientesService
      .getPedientes()
      .subscribe((Pedientes: Pediente[]) => (this.Pedientes = Pedientes));
  }
}
