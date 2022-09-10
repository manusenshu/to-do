import { Component, OnInit } from '@angular/core';
import { Pendiente } from '../pendiente';
import { pendientesService } from '../pendientes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-pendiente',
  templateUrl: './agregar-pendiente.component.html',
  styleUrls: ['./agregar-pendiente.component.css'],
})
export class AgregarpendienteComponent implements OnInit {
  constructor(
    private pendientesService: pendientesService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}
  pendienteModel = new Pendiente('', '', undefined, undefined, undefined);

  onSubmit() {
    this.pendientesService.addpendiente(this.pendienteModel).subscribe(() => {
      this.snackBar.open('pendiente guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/pendientes']);
    });
  }
}
