import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './publico/inicio/inicio.component';
import { ErrorDeServidorComponent } from './publico/errores/error-de-servidor/error-de-servidor.component';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { EncabezadoComponent } from './publico/pagina-maestra/encabezado/encabezado.component';
import { MenuLateralComponent } from './publico/pagina-maestra/menu-lateral/menu-lateral.component';
import { PiePaginaComponent } from './publico/pagina-maestra/pie-pagina/pie-pagina.component';
import { NgToastModule } from 'ng-angular-popup';

import { HttpClientModule } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http'; importar este modulo que me permite hacer peticiones http


//import { NgToastModule } from 'ng-angular-popup'; este es el modulo de popup  npm install ng-angular-popup  https://letsprogram.in/blog/647990c15960050b58aca375






@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ErrorDeServidorComponent,
    RutaNoEncontradaComponent,
    EncabezadoComponent,
    MenuLateralComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
