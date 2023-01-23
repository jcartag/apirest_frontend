import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { clienteEntity } from '../Interfaces/clienteInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  // getById(id: number){
  //   return this.http.get(`${environment.url_api}/tradatamaestra/${id}`);
  // }

  getAll(): Observable<clienteEntity>{
    return this.http.get<clienteEntity>(`${environment.url_api}/clientes`);
  }  

  create(cliente: clienteEntity):Observable<any>{
    return this.http.post(`${environment.url_api}/guardar`,cliente)
  }
 
  update(id: clienteEntity){    
    return this.http.put<clienteEntity>(`${environment.url_api}/cliente/${id.id}`,id)
  } 

  delete(id: clienteEntity):Observable<clienteEntity>{
    return this.http.delete(`${environment.url_api}/cliente/${id.id}`);
  }
}
