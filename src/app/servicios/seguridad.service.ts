import { Injectable } from '@angular/core';
import { ConfiguracionRutasBackend } from '../config/configuracion.rutas.backend';
import { HttpClient } from '@angular/common/http';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { RespuestaServer } from '../Modelos/RespuestaServer.model';
import { Datosendpointiniciar_sesionModel } from '../Modelos/Datosendpointiniciar_sesion';
import { BehaviorSubject } from 'rxjs';
import { SesionModel } from '../Modelos/Sesion.model';


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
    this.validacionDeSesion();

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

    CerrarSessionpost(): Observable <RespuestaServer>{
      const datosUsuarioString = localStorage.getItem('datosUsuario-banproinpu');
      const datosUsuarioObjeto = JSON.parse(datosUsuarioString!);
      const token = datosUsuarioObjeto.token;
      const esquema_db = datosUsuarioObjeto.esquema_db;

      return this.http.post<RespuestaServer>(this.urlBase + 'cerrar_sesion', {
        token:token,
        esquema_db:esquema_db
      });
      }




   /**
   * CerrarSesion
   * @returns cierra la sesion del usuario booleano
   */
   CerrarSesion(): boolean {
    let datosLS = localStorage.getItem('datosUsuario-banproinpu');
    if (datosLS) {
      this.CerrarSessionpost().subscribe({
        next: (datos:RespuestaServer) => {
          //console.log(datos);
          localStorage.removeItem('datosUsuario-banproinpu');
        },
        error: (error) => {
          console.log(error);
        }
      });

      //cerrar_sesion_super_admin
      //alert("Sesion cerrada");
      //this.toast.success({detail:"Exito",summary:"Sesion Cerrada",duration:5000, position:'topCenter'});

      return true;
    } else {
      //alert("No hay sesion iniciada");
      //this.toast.info({detail:"ERROR",summary:"No hay sesion iniciada",duration:5000, position:'topCenter'});
      return false;
    }
  }






    /**
     *
     * @param usuario
     * @param clave
     * @param esquema
     * @returns Observable <RespuestaServerModel> respuesta del servidor (1 exito 2 error)
     */

  IdentificarUsuarioEsquemas(usuario:string,clave:string,esquema:string): Observable <RespuestaServer>{
    //console.log(usuario);
    //console.log(clave);
    //console.log(esquema);
    localStorage.removeItem('key');
    return this.http.post<RespuestaServer>(this.urlBase + 'iniciar_sesion', {
      usuario:usuario,
      clave:clave,
      esquema_db:esquema
    });
    }



  AlmacenarDatosUsuarioIdentificadoLocalStorage (datosUsuario:RespuestaServer):boolean{
    let cadena = JSON.stringify(datosUsuario.DATOS);
    let datosLS= localStorage.getItem('datosUsuario');
    if(datosLS){
      this.toast.error({detail:"ERROR",summary:"Ya existe un usuario identificado",duration:5000, position:'topCenter'});
      return false;
    }
    else{
      localStorage.setItem('datosUsuario-banproinpu',cadena);
      this.validacionDeSesion();
      return true;
    }

  }

  AlmacenarUsuarioContraseniaLocalStorage (usuario:string,clave:string){
    let datosUsuario = {
      usuario:usuario,
      clave:clave
    }
    let cadena = JSON.stringify(datosUsuario);
    localStorage.setItem('key',cadena);
  }

  // enviar datos a otro componente, en este caso enviaremos una lista de DatosEndpoininiciar_sesionModel

  changeDatos(datos: Datosendpointiniciar_sesionModel[]) {
    this.datosSource.next(datos);
  }






    /**
   * Obtiene los datos de la sesion del usuario
   * @returns datos de la sesion del usuario
   */
    datosUsuarioValidado = new BehaviorSubject<SesionModel>(new SesionModel());

    ObteberDatosSesion(): Observable<SesionModel> {

      return this.datosUsuarioValidado.asObservable();


  }

  validacionDeSesion(){
    let datosLS = localStorage.getItem('datosUsuario-banproinpu');
    if (datosLS) {
      let objUsuario= JSON.parse(datosLS);
      this.ActualizarComportamientoUsuario(objUsuario);
      return true;
    } else {
      return false;
    }
  }

  ActualizarComportamientoUsuario(datos:SesionModel){
    //console.log(this.datosUsuarioValidado);
    return this.datosUsuarioValidado.next(datos);
  }


  RemoverDatosUsuarioIdentificado(){
    let datosUsuario=localStorage.getItem('datosUsuario-banproinpu');
    if(datosUsuario){
      localStorage.removeItem('datosUsuario-banproinpu');
    }
    this.ActualizarComportamientoUsuario(new SesionModel());


  }





}
