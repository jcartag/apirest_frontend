
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { ClienteComponent } from './cliente/cliente.component';
import { EditarComponent } from './editar/editar.component';



const routes: Routes = [
  {
    path:'cliente', component: ClienteComponent       
  },
  {
    path:'anexar', component: AgregarComponent       
  },
  {
    path:'editar/:id', component: EditarComponent       
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }