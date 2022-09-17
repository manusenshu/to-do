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
  displayedColumns: string[] = ['titulo', 'descripcion', 'fecha', 'caducidad', 'cierre', 'editar', 'tomar', 'eliminar'];
  
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
  
  public dataSource = new MatTableDataSource(this.Pendientes);
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  public FormularioReporte: FormularioReporte = new FormularioReporte(undefined, undefined, undefined, this.inicio);



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private PendientesService: PendientesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  }

  onSubmit() {
    let estado = this.FormularioReporte.estado;
    let tipoFecha = this.FormularioReporte.tipoFecha;
    let fechaInicio = this.FormularioReporte.fechaInicio;
    let fechaFin = this.FormularioReporte.fechaFin;
    this.PendientesService.reportPendiente(estado, tipoFecha, fechaInicio, fechaFin).subscribe(
      (dataPendientes: Pendiente[]) => (this.dataSource = new MatTableDataSource(dataPendientes) ) 
    );
  }
}

