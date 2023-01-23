import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { MatTableModule } from '@angular/material/table';
import { AgregarComponent } from './agregar/agregar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';





@NgModule({
  declarations: [
    ClienteComponent,
    AgregarComponent,
    EditarComponent
  ],
    imports: [
    ClienteRoutingModule,
    MaterialModule,    
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],

  exports:[
    ClienteComponent,
    AgregarComponent,
    MaterialModule,
    ReactiveFormsModule, 
    FormsModule  
  ]
})
export class ClienteModule { }
