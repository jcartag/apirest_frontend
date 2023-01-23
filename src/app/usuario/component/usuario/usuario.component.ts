import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import Utils from 'src/app/helper/utils';
import { usuarioEntity } from 'src/app/Interfaces/usuarioInterface';
import { ServiceUsuarioService } from 'src/app/service/service-usuario.service';
import Swal from 'sweetalert2';
import { CrearComponent } from '../crear/crear.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarioForm: FormGroup; 
  usuario: usuarioEntity = {};
  usuarioEntity: usuarioEntity[];

  displayedColumns: string[] = ['nombre','apellido','edad','sexo','telefono','estado','acciones'];
  dataSource: MatTableDataSource<usuarioEntity>;


  constructor(private producS: ServiceUsuarioService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {   
    this.producS.getAll().subscribe((res: any)=> {        
      this.dataSource = res;     
    });
  }

  showCliente(){
    this.dialog.open(CrearComponent,{
      width:'40%',
      height:'60%'     
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getUsuario();
      }
    })    
  }

  delete(row: any){  
    console.log(row) 
    Swal.fire({
      text: `¿Desea eliminar el usuario?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#018d36',
      cancelButtonColor: '#D4D4D4',
      confirmButtonText: 'SI',
      cancelButtonText: 'NO'
    }).then((result) => {
      if (result.value) {
         this.producS.delete(row).subscribe((res: any) => {         
       if (res.code !== 0) {
        Swal.fire({
          text: '¡Usuario eliminada con éxito!',
          icon: 'success',
          iconColor: 'green',
          confirmButtonColor: 'green',
          showConfirmButton: false,
          timer: 1500
         }).then(()=>{
           this.getUsuario();
         });
        } 
        },res => {          
          Utils.mostrarAlerta(res.message? res.message : 'No se pudo eliminar el usuario','error');
         });
     }
   });
 }

 funtionEdit(data: any) {   
  this.dialog.open(EditarComponent,{     
      width:'50%',
      height:'50%',
      data:{empcode:data}
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getUsuario();
      }
  })
}    

}
