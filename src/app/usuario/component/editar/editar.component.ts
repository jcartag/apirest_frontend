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
      id_usuario: [''], 
      nombre_usuario: ['', Validators.required],
      apellido_usuario: ['', Validators.required],
      edad_usuario: ['', Validators.required],
      sexo_usuario: ['', Validators.required],
      telefono_usuario: ['', Validators.required],
      estado_civil: ['', Validators.required],
      }); 
      if(this.data.empcode){      
        console.log("editar",this.data.empcode) 
        this.usuarioForm.controls['id_usuario'].setValue(this.data.empcode.id_usuario);
        this.usuarioForm.controls['nombre_usuario'].setValue(this.data.empcode.nombre_usuario);
        this.usuarioForm.controls['apellido_usuario'].setValue(this.data.empcode.apellido_usuario);
        this.usuarioForm.controls['edad_usuario'].setValue(this.data.empcode.edad_usuario);
        this.usuarioForm.controls['sexo_usuario'].setValue(this.data.empcode.sexo_usuario);
        this.usuarioForm.controls['telefono_usuario'].setValue(this.data.empcode.telefono_usuario);
        this.usuarioForm.controls['estado_civil'].setValue(this.data.empcode.estado_civil);
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
