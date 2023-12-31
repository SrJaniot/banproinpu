import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdentificarUsuarioEsquemasComponent } from './identificar-usuario-esquemas/identificar-usuario-esquemas.component';


@NgModule({
  declarations: [
    IdentificacionUsuarioComponent,
    CerrarSesionComponent,
    CambioClaveComponent,
    RecuperarClaveComponent,
    IdentificarUsuarioEsquemasComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SeguridadModule { }
