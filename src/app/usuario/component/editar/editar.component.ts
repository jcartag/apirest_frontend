import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceUsuarioService } from 'src/app/service/service-usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public usuarioForm : FormGroup;
  constructor(private formBuilder: FormBuilder, 
    private producS: ServiceUsuarioService, public dialogref:MatDialogRef<EditarComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({    
      id: [''], 
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      telefono: ['', Validators.required],
      estado: ['', Validators.required],
      }); 
      if(this.data.empcode){      
        console.log("editar",this.data.empcode) 
        this.usuarioForm.controls['id'].setValue(this.data.empcode.id_usuario);
        this.usuarioForm.controls['nombre'].setValue(this.data.empcode.nombre_usuario);
        this.usuarioForm.controls['apellido'].setValue(this.data.empcode.apellido_usuario);
        this.usuarioForm.controls['edad'].setValue(this.data.empcode.edad_usuario);
        this.usuarioForm.controls['sexo'].setValue(this.data.empcode.sexo_usuario);
        this.usuarioForm.controls['telefono'].setValue(this.data.empcode.telefono_usuario);
        this.usuarioForm.controls['estado'].setValue(this.data.empcode.estado_civil);
    }  
  }

  edit() {
    this.producS.update(this.usuarioForm.value).subscribe({
     next:()=>{
       Swal.fire({
         icon: 'success',
         title: 'Usuario actualizado con éxito!',
         showConfirmButton: false,
         timer: 1500
       })
       this.dialogref.close('update');
       this.clear(); 
     },
     error:()=>{
       Swal.fire({
         icon: 'error',
         title: 'No se pudo actualizar el usuario!!',
         showConfirmButton: false,
         timer: 1500
       })
     }
    })
   } 
   
  clear(){
    this.usuarioForm.reset();
  }


}
