import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CrearUsuarioService } from '../../servicios/crear-usuario.service'


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  formulario:any;
  registro:any;
  registro_enviar = {
    nombre:null,
    apellido:null,
    rut:null,
    correo:null,
    password:null,
  }

  constructor(private fb:FormBuilder, private UsuarioServiceCrear: CrearUsuarioService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      rut:['',Validators.required],
      correo:['',Validators.required],
      password:['',Validators.required],
    })
  }
  
  get formularioReactivo(){
    return this.formulario.controls;
  }
  botonEnviar(){
    this.registro_enviar.nombre = this.formularioReactivo.nombre.value
    this.registro_enviar.apellido = this.formularioReactivo.apellido.value
    this.registro_enviar.rut = this.formularioReactivo.rut.value
    this.registro_enviar.correo = this.formularioReactivo.correo.value
    this.registro_enviar.password = this.formularioReactivo.password.value

    this.UsuarioServiceCrear.crear_datosFormularios(this.registro_enviar).subscribe(
      (Response:any) => {
        this.registro = Response.registro;
        console.log("los datos recibidos son")
        console.log(this.registro)
      }, error => {
        console.log(error)
      }
    )
    //console.log(this.formularioReactivo);
  }
  obtenerRegistro(){
    this.UsuarioServiceCrear.obtener_datosFormularios().subscribe(
      (Response:any) => {
        this.registro = Response.registro
        console.log(this.registro);
      }, error => {
        console.log(error)
      }
    )
  }
  eliminar(id:any){
    console.log(id)
  }
}
