
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';
import { UsuarioComponent } from './usuario/usuario.component';



const routes: Routes = [
  {
    path:'usuario', component: UsuarioComponent      
  },
  {
    path:'crear', component: CrearComponent   
  },
  {
    path:'editar/:id', component: EditarComponent       
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }