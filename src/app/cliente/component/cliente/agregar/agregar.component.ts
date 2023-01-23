import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Utils from 'src/app/helper/utils';
import { clienteEntity } from 'src/app/Interfaces/clienteInterface';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';
 

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  [x: string]: any;
  
  public clienteForm : FormGroup;
  
  
  constructor(private formBuilder: FormBuilder, private producS: ServiceService, public dialogref:MatDialogRef<AgregarComponent>) { }

  ngOnInit(){     
    this.SaveClien();
  }


  SaveClien(cliente?: clienteEntity){
    this.clienteForm = this.formBuilder.group({    
      nombre: [cliente?.nombre || '', Validators.required],
      apellido: [cliente?.apellido || '', Validators.required],
      email: [cliente?.email || '', Validators.required]
      });    
  }


  guardar(form){        
      this.producS.create(form).subscribe((res: any)=>{   
        if (res != null) {
          Swal.fire({
            icon: 'success',
            title: 'Cliente guardado con éxito!',
            showConfirmButton: false,
            timer: 1500
          })     
          this.dialogref.close('save');    
          this.clear();         
        }
        if (res == 0) {
          Utils.mostrarAlerta('Error al ejecutar la petición', 'error');
          return;
        } 
      });     
  }

  clear(){
    this.clienteForm.reset();
  }
}
