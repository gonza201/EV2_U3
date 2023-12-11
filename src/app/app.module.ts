import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { ObtenerUsuarioComponent } from './usuario/obtener-usuario/obtener-usuario.component';
import { CrearEgresoComponent } from './egreso/crear-egreso/crear-egreso.component';
import { ObtenerEgresoComponent } from './egreso/obtener-egreso/obtener-egreso.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, 
    CrearUsuarioComponent,
    ObtenerUsuarioComponent,
    CrearEgresoComponent,
    ObtenerEgresoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
