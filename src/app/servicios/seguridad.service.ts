import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { RespuestaServer } from '../Modelos/RespuestaServer.model';
import { Datosendpointiniciar_sesionModel } from '../Modelos/Datosendpointiniciar_sesion';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  // variables
  
  // variable que me permite enviar datos a otro componente
  private datosSource = new BehaviorSubject<Datosendpointiniciar_sesionModel[]>([]);
  //propiedad del servicio SharedDataService que es un Observable. Este Observable se crea a partir de un BehaviorSubject llamado datosSource.
  //Un BehaviorSubject es un tipo especial de Subject (que es un tipo de Observable) que mantiene un valor actual y puede emitir este valor actual a cualquier observador que se suscriba a él.
  //en este caso esta variable no puede ser private porque se necesita acceder a ella desde otro componente
  currentDatos = this.datosSource.asObservable();


  //variable que tiene la url de los endpoints del backend
  private urlBase: string = ConfiguracionRutasBackend.urlbackend;


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

  // enviar datos a otro componente, en este caso enviaremos una lista de DatosEndpoininiciar_sesionModel

  changeDatos(datos: Datosendpointiniciar_sesionModel[]) {
    this.datosSource.next(datos);
  }





}
