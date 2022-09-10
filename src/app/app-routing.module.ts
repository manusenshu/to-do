import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarPedienteComponent } from './agregar-pediente/agregar-pediente.component';
import { ListarPedientesComponent } from './listar-pedientes/listar-pedientes.component';
import { EditarPedienteComponent } from './editar-pediente/editar-pediente.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

const routes: Routes = [
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "Pedientes", component: ListarPedientesComponent },
  { path: "Pedientes/agregar", component: AgregarPedienteComponent },
  { path: "Pedientes/editar/:id", component: EditarPedienteComponent },
  { path: "", redirectTo: "/Pedientes", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/Pedientes" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
