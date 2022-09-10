import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PedientesService } from '../pedientes.service';
import { Pediente } from '../pediente';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-pediente',
  templateUrl: './editar-pediente.component.html',
  styleUrls: ['./editar-pediente.component.css'],
})
export class EditarPedienteComponent implements OnInit {
  inicio = new Date('2022-09-06')
  public Pediente: Pediente = new Pediente('', '', this.inicio, undefined, undefined, undefined, undefined);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PedientesService: PedientesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    let idPediente = this.route.snapshot.paramMap.get('id');
    this.PedientesService.getPediente(idPediente).subscribe(
      (Pediente: Pediente) => (this.Pediente = Pediente)
    );
  }

  volver() {
    this.router.navigate(['/Pedientes']);
  }

  onSubmit() {
    this.PedientesService.updatePediente(this.Pediente).subscribe(() => {
      this.snackBar.open('Pediente actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }
}
