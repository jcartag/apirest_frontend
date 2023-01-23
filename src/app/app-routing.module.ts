import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/component/cliente/cliente/cliente.component';
import { MenuComponent } from './menu/component/menu/menu/menu.component';
import { LayoutComponent } from './layout/layout/layout.component'
import { AgregarComponent } from './cliente/component/cliente/agregar/agregar.component';
import { ClienteModule } from './cliente/component/cliente/cliente.module';
import { EditarComponent } from './cliente/component/cliente/editar/editar.component';
import { CrearComponent } from './usuario/component/crear/crear.component';
import { UsuarioComponent } from './usuario/component/usuario/usuario.component';
import { UsuarioModule } from './usuario/component/usuario.module';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, 
    children: [          
      {
        path: 'cliente',
        component: ClienteComponent,
        loadChildren: () => ClienteModule
      },
      {
        path: 'anexar',
        component: AgregarComponent
      },
      // {
      //   path: 'editar',
      //   component: EditarComponent
      // },
      {
        path: 'usuario',
        component: UsuarioComponent,
        loadChildren: () => UsuarioModule
      },
      // {
      //   path: 'editarUsuario',
      //   component: EditarComponent
      // },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'menu',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
