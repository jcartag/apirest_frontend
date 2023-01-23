import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  public clienteForm : FormGroup;
  editdata: any; 
  
  constructor(private formBuilder: FormBuilder, 
    private producS: ServiceService, public dialogref:MatDialogRef<EditarComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({   
      id: [''], 
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required]
      });    
    if(this.data.empcode){       
        this.clienteForm.controls['id'].setValue(this.data.empcode.id);
        this.clienteForm.controls['nombre'].setValue(this.data.empcode.nombre);
        this.clienteForm.controls['apellido'].setValue(this.data.empcode.apellido);
        this.clienteForm.controls['email'].setValue(this.data.empcode.email);
    }  
  }

  edit() {
    this.producS.update(this.clienteForm.value).subscribe({
     next:()=>{
       Swal.fire({
         icon: 'success',
         title: 'Cliente editado con éxito!',
         showConfirmButton: false,
         timer: 1500
       })
       this.dialogref.close('update');
       this.clear(); 
     },
     error:()=>{
       Swal.fire({
         icon: 'error',
         title: 'No se pudo actualizar el cliente!!',
         showConfirmButton: false,
         timer: 1500
       })
     }
    })
   } 
   
  clear(){
    this.clienteForm.reset();
  }

}
