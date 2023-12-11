import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { ObtenerUsuarioComponent } from './usuario/obtener-usuario/obtener-usuario.component';
import { CrearEgresoComponent } from './egreso/crear-egreso/crear-egreso.component';
import { ObtenerEgresoComponent } from './egreso/obtener-egreso/obtener-egreso.component';

const routes: Routes = [

  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'obtener-usuario',
    component: ObtenerUsuarioComponent
  },
  {
    path: 'crear-egreso',
    component: CrearEgresoComponent
  },
  {
    path: 'obtener-egreso',
    component: ObtenerEgresoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
