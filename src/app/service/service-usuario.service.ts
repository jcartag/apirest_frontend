import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuarioEntity } from '../Interfaces/usuarioInterface';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuarioService {

  constructor(private http: HttpClient) { }

     getAll(): Observable<usuarioEntity>{
       return this.http.get<usuarioEntity>(`${environment.url_api_usuario}/usuario`);
    } 

    create(usuario: usuarioEntity):Observable<usuarioEntity>{
      console.log("service",usuario)
      return this.http.post(`${environment.url_api_usuario}/guardar`,usuario)
    }

    update(id: usuarioEntity){    
      console.log("usuario1",id.id_usuario)
      return this.http.put<usuarioEntity>(`${environment.url_api_usuario}/usuario/${id.id_usuario}`,id)
    } 
  
    delete(id: usuarioEntity):Observable<usuarioEntity>{
      return this.http.delete(`${environment.url_api_usuario}/usuario/${id.id_usuario}`);
    }
    
}
