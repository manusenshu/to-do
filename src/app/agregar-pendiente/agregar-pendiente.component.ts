import { Component, OnInit } from '@angular/core';
import { Pendiente } from '../pendiente';
import { PendientesService } from '../pendientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-pendiente',
  templateUrl: './agregar-pendiente.component.html',
  styleUrls: ['./agregar-pendiente.component.css'],
})
export class AgregarPendienteComponent implements OnInit {
  constructor(
    private PendientesService: PendientesService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}
  PendienteModel = new Pendiente('', '', undefined, undefined, undefined, undefined, undefined);

  onSubmit() {
    this.PendientesService.addPendiente(this.PendienteModel).subscribe(() => {
      this.snackBar.open('Pendiente guardado', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/Pendientes']);
    });
  }
}
