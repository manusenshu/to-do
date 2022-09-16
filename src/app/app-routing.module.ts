import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AgregarPendienteComponent } from './agregar-pendiente/agregar-pendiente.component';
import { ListarPendientesComponent } from './listar-pendientes/listar-pendientes.component';
import { EditarPendienteComponent } from './editar-pendiente/editar-pendiente.component';
import { ReportePendientesComponent } from './reporte-pendientes/reporte-pendientes.component';

const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "pendientes", component: ListarPendientesComponent },
  { path: "pendientes/agregar", component: AgregarPendienteComponent },
  { path: "pendientes/editar/:id", component: EditarPendienteComponent },
  { path: "pendientes/reporte", component: ReportePendientesComponent },
  { path: "", redirectTo: "/pendientes", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/pendientes" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
