import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrearEgresoService {
  url_backend=environment.url_backend+'registroForm'

  constructor(private http:HttpClient) { }

  crear_datosEgresos(datosEgresos:any){
    return this.http.post(`${this.url_backend+'/crear-registro'}`,datosEgresos);
  }
  obtener_datosEgresos(){
    return this.http.get(`${this.url_backend+'/obtener-registro'}`)
  }
}
