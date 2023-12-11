import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {
  url_backend = environment.url_backend+"/registroForm"

  constructor(private http:HttpClient) { }

  crear_datosFormularios(datosFormularios:any){
    return this.http.post(`${this.url_backend+'/crear-registro' }`,datosFormularios);
    
    console.log(datosFormularios);
  }
  
  obtener_datosFormularios(){
    return this.http.get(`${this.url_backend+'/obtener-registro'}`)
  }
}
