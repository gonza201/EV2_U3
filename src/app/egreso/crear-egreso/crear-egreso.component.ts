import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CrearEgresoService } from '../../servicios/crear-egreso.service'

@Component({
  selector: 'app-crear-egreso',
  templateUrl: './crear-egreso.component.html',
  styleUrls: ['./crear-egreso.component.css']
})
export class CrearEgresoComponent implements OnInit {

  egreso:any
  registro_egreso:any
  registro_egreso_enviar = {
    id_usuario:{type:null, ref: 'Usuario', dafault:null},
    precio:null,
    descripcion:null,
  }

  constructor(private fb:FormBuilder, private serviceCrearegreso:CrearEgresoService) { }

  ngOnInit(): void {
    this.egreso = this.fb.group({
      id_usuario:['',[Validators.required]],
      precio:['',[Validators.required]],
      descripcion:['',[Validators.required]],
    })
  }
  get ReactivoFormulario(){
    return this.egreso.controls
  }
  EnviarBoton(){
    this.registro_egreso_enviar.id_usuario = this.ReactivoFormulario.id_usuario.value
    this.registro_egreso_enviar.precio = this.ReactivoFormulario.precio.value
    this.registro_egreso_enviar.descripcion = this.ReactivoFormulario.descripcion.value

    this.serviceCrearegreso.crear_datosEgresos(this.registro_egreso_enviar).subscribe(
      (Response:any) => {
        this.registro_egreso = Response.registro_egreso;
        console.log("los datos recibidos son")
        console.log(this.registro_egreso)
      }, error => {
        console.log(error)
      }
    )
  }
  RegistroObtener(){
    this.serviceCrearegreso.obtener_datosEgresos().subscribe(
      (Response:any) => {
        this.registro_egreso = Response.registro_egreso
        console.log(this.registro_egreso);
      }, error => {
        console.log(error)
      }
    )
  }
  eliminar(id:any){
    console.log(id)
  }


}
