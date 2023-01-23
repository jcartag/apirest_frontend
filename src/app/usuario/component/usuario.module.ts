import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from 'src/app/usuario/component/editar/editar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations:[
    CrearComponent,
    EditarComponent,
    UsuarioComponent

  ],
    imports: [
    MaterialModule,    
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  exports:[
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule  
  ]
})
export class UsuarioModule { }
