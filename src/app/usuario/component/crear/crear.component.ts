import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import Utils from 'src/app/helper/utils';
import { usuarioEntity } from 'src/app/Interfaces/usuarioInterface';
import { ServiceUsuarioService } from 'src/app/service/service-usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public usuarioForm: FormGroup; 
  usuario: usuarioEntity = {};
  usuarioEntity: usuarioEntity[];

  estado = ["Femenino","Masculino"];
  
  constructor( private formBuilder: FormBuilder, private producS: ServiceUsuarioService, 
    public dialogref:MatDialogRef<CrearComponent>) { }

  ngOnInit(): void {
    this.SaveUsers();
  }  

  SaveUsers(usuario?: usuarioEntity){
    this.usuarioForm = this.formBuilder.group({    
      nombre: [usuario?.nombre_usuario || '', Validators.required],
      apellido: [usuario?.apellido_usuario || '', Validators.required],
      edad: [usuario?.edad_usuario || '', Validators.required],
      sexo: [usuario?.sexo_usuario || '', Validators.required],
      telefono: [usuario?.telefono_usuario || '', Validators.required],
      estado: [usuario?.estado_civil || '', Validators.required],
      });    
  }

  guardar(form){
    this.producS.create(form).subscribe((res: any)=>{   
      if (res != null) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario guardado con éxito!',
          showConfirmButton: false,
          timer: 1500
        })     
        this.dialogref.close('save');    
        //this.clear();         
      }
      if (res == 0) {
        Utils.mostrarAlerta('Error al ejecutar la petición', 'error');
        return;
      } 
    });     
}

clear(){
  this.usuarioForm.reset();
 }
}

  