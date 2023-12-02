import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { ObtenerParametrosComponent } from './obtener-parametros/obtener-parametros.component';


@NgModule({
  declarations: [
    ObtenerParametrosComponent
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule
  ]
})
export class ParametrosModule { }
