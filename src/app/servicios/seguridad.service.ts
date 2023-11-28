import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { RespuestaServer } from '../Modelos/RespuestaServer.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  urlBase: string = ConfiguracionRutasBackend.urlbackend;


  constructor(
    private http: HttpClient,
    private toast: NgToastService
  ) {

   }


/**
 * Funcion que me permite identificar al usuario (login de usuario)
 * @param usuario
 * @param clave
 * @returns Observable <RespuestaServerModel> respuesta del servidor (1 exito 2 error)
 */
   IdentificarUsuario(usuario:string,clave:string): Observable <RespuestaServer>{
    return this.http.post<RespuestaServer>(this.urlBase + 'iniciar_sesion', {
      usuario:usuario,
      clave:clave
    });
    }



 //en proseso terminar OJO-----------------------------------------------------------------------------------------------------------------

  AlmacenarDatosUsuarioIdentificado (datosUsuario:RespuestaServer){
    let cadena = JSON.stringify(datosUsuario);
    let datosLS= localStorage.getItem('datosUsuario');
    if(datosLS){
      this.toast.error({detail:"ERROR",summary:"Ya existe un usuario identificado",duration:5000, position:'topCenter'});
    }

  }





}
