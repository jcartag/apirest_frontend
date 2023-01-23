import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import Utils from 'src/app/helper/utils';
import { clienteEntity } from 'src/app/Interfaces/clienteInterface';
import { ServiceService } from 'src/app/service/service.service';
import Swal from 'sweetalert2';
import { AgregarComponent } from 'src/app/cliente/component/cliente/agregar/agregar.component';
import { EditarComponent } from '../editar/editar.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public clienteForm: FormGroup; 
  cliente: clienteEntity = {};
  clienteEntity: clienteEntity[];
  editdata: any;

  displayedColumns: string[] = ['nombre','apellido','email','acciones'];
  dataSource: MatTableDataSource<clienteEntity>;

  constructor(private producS: ServiceService, private dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource(new Array<clienteEntity>())
  }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes() {   
    this.producS.getAll().subscribe((res: any)=> {        
      this.dataSource.data = res;     
    });
  }

  funtionEdit(code: any) {   
    this.dialog.open(EditarComponent,{     
        width:'50%',
        height:'50%',
        data:{empcode:code}
      }).afterClosed().subscribe(val=>{
        if(val==='update'){
          this.getClientes();
        }
    })
  }    

  showCliente(){
    this.dialog.open(AgregarComponent,{
      width:'30%',
      height:'50%'     
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getClientes();
      }
    })    
  }  
    
  delete(row: any){   
    Swal.fire({
      text: `¿Desea eliminar el cliente?`,
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
          text: '¡Cliente eliminada con éxito!',
          icon: 'success',
          iconColor: 'green',
          confirmButtonColor: 'green',
          showConfirmButton: false,
          timer: 1500
         }).then(()=>{
           this.getClientes();
         });
        } 
        },res => {          
          Utils.mostrarAlerta(res.message? res.message : 'No se pudo eliminar cliente','error');
         });
     }
   });
 }


}

  

