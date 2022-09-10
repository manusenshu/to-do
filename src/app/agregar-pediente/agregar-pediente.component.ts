import { Component, OnInit } from '@angular/core';
import { Pediente } from '../pediente';
import { PedientesService } from '../pedientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-pediente',
  templateUrl: './agregar-pediente.component.html',
  styleUrls: ['./agregar-pediente.component.css'],
})
export class AgregarPedienteComponent implements OnInit {
  constructor(
    private PedientesService: PedientesService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}
  PedienteModel = new Pediente('', '', undefined, undefined, undefined, undefined, undefined);

  onSubmit() {
    this.PedientesService.addPediente(this.PedienteModel).subscribe(() => {
      this.snackBar.open('Pediente guardado', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/Pedientes']);
    });
  }
}
