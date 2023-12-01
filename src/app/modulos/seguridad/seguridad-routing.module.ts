import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificarUsuarioEsquemasComponent } from './identificar-usuario-esquemas/identificar-usuario-esquemas.component';

const routes: Routes = [
  {
    path:'login',
    component: IdentificacionUsuarioComponent
  },
  {
    path:'login-esquemas',
    component: IdentificarUsuarioEsquemasComponent
  },
  {
    path:'cambio-clave',
    component: CambioClaveComponent
  },
  {
    path: 'recuperar-clave',
    component:RecuperarClaveComponent
  },
  {
    path:'cerrar-sesion',
    component: CerrarSesionComponent
  }





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
