import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PendientesService } from '../pendientes.service';
import { Pendiente } from '../pendiente';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-Pendiente',
  templateUrl: './editar-pendiente.component.html',
  styleUrls: ['./editar-pendiente.component.css'],
})
export class EditarPendienteComponent implements OnInit {
  public Pendiente: Pendiente = new Pendiente('', '', undefined, undefined, undefined, undefined, undefined);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PendientesService: PendientesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    let idPendiente = this.route.snapshot.paramMap.get('id');
    this.PendientesService.getPendiente(idPendiente).subscribe(
      (Pendiente: Pendiente) => (this.Pendiente = Pendiente)
    );
  }

  volver() {
    this.router.navigate(['/pendientes']);
  }

  onSubmit() {
    this.PendientesService.updatePendiente(this.Pendiente).subscribe(() => {
      this.snackBar.open('Pendiente actualizado', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }
}
