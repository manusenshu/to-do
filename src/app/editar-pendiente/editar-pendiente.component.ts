import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PendientesService } from "../pendientes.service"
import { Pendiente } from '../pendiente';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-pendiente',
  templateUrl: './editar-pendiente.component.html',
  styleUrls: ['./editar-pendiente.component.css']
})
export class EditarPendienteComponent implements OnInit {

  private pendiente: Pendiente = new Pendiente("", "", 0);

  constructor(private route: ActivatedRoute,
    private router: Router, private pendientesService: PendientesService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idPendiente = this.route.snapshot.paramMap.get("id");
    this.pendientesService.getPendiente(idPendiente).subscribe((pendiente: Pendiente) => this.pendiente = pendiente)
  }

  volver() {
    this.router.navigate(['/pendientes']);
  }

  onSubmit() {
    this.pendientesService.updatePendiente(this.pendiente).subscribe(() => {
      this.snackBar.open('Pendiente actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
