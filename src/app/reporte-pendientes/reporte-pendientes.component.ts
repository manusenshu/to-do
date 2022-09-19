import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PendientesService } from '../pendientes.service';
import { Pendiente } from '../pendiente';
import { FormularioReporte } from '../formularioReporte';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reporte-pendientes',
  templateUrl: './reporte-pendientes.component.html',
  styleUrls: ['./reporte-pendientes.component.css'],
})
export class ReportePendientesComponent implements OnInit {
  displayedColumns: string[] = [
    'titulo',
    'descripcion',
    'fecha',
    'caducidad',
    'cierre',
    'tomar',
  ];

  public Pendientes: Pendiente[] = [
    new Pendiente(
      'Sin datos:',
      'se necesitar llenar el formulario para generar el reporte',
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ),
  ];

  public myDate = new Date();

  public dataSource = new MatTableDataSource(this.Pendientes);
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public FormularioReporte: FormularioReporte = new FormularioReporte(
    0,
    1,
    undefined,
    undefined
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PendientesService: PendientesService,
    private snackBar: MatSnackBar
  ) {}

  getColor(estado) {
    switch (estado) {
      case 'Nuevo':
        return 'lightblue';
      case 'En Proceso':
        return 'blue';
      case 'Terminado':
        return 'green';
      default:
        return 'lightblue';
    }
  }

  ngOnInit() {}

  onSubmit() {
    this.PendientesService.reportPendiente(
      this.FormularioReporte.estado,
      this.FormularioReporte.tipoFecha,
      this.FormularioReporte.fechaInicio,
      this.FormularioReporte.fechaFin
    ).subscribe(
      (dataPendientes: Pendiente[]) =>
        (this.dataSource = new MatTableDataSource(dataPendientes))
    );
  }
}
