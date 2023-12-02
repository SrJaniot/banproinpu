import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObtenerParametrosComponent } from './obtener-parametros/obtener-parametros.component';

const routes: Routes = [
  {
    path:'obtener-parametros',
    component: ObtenerParametrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
