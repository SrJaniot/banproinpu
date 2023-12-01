import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { RespuestaServer } from '../../../Modelos/RespuestaServer.model';
import { Datosendpointiniciar_sesionModel } from '../../../Modelos/Datosendpointiniciar_sesion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion-usuario',
  templateUrl: './identificacion-usuario.component.html',
  styleUrl: './identificacion-usuario.component.css'
})
export class IdentificacionUsuarioComponent {
  // variables
  fGroup: FormGroup= new FormGroup({});


  // constructor que me permite inicializar las variables
  constructor(
    private fb: FormBuilder,
    private toast: NgToastService,
    private servicio: SeguridadService,
    private router: Router,
  ) {

  }
  // funcion que se ejecuta cuando se inicializa el componente
  ngOnInit(): void {
    this.ConstriurFormulario();
  }

  // funcion que me permite construir el formulario con las variables que se van a utilizar.
  ConstriurFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['',[Validators.required,]],
      clave: ['',[Validators.required,]],
    });
  }

  EnviarFormulario(){
    if(this.fGroup.invalid){
      this.toast.error({detail:"ERROR",summary:"Formulario invalido",duration:5000, position:'topCenter'});
    }else{
     let usuario = this.fGroup.controls['usuario'].value;
     let clave = this.fGroup.controls['clave'].value;
     //console.log(usuario);
     //console.log(clave);
     this.servicio.IdentificarUsuario(usuario,clave).subscribe({
        next: (respuesta: RespuestaServer) => {
          if(respuesta && respuesta.CODIGO == 1){
            //this.toast.success({detail:"EXITO",summary:"Usuario identificado",duration:5000, position:'topCenter'});
            //console.log(respuesta);
            //console.log(respuesta.CODIGO);
            //console.log(respuesta.MENSAJE);
            //console.log(respuesta.DATOS);
            if (respuesta.DATOS) {
              let Lista_Datosendpointiniciar_sesion = respuesta.DATOS as Datosendpointiniciar_sesionModel [];
              //console.log(Datosendpointiniciar_sesion);
              //let PrimerElementoDeLaLista =Datosendpointiniciar_sesion[0];
              //console.log(key);
              //console.log(key.id);
              //console.log(Datosendpointiniciar_sesion.id);
              //console.log(Datosendpointiniciar_sesion.esquema_db);
              //console.log(Datosendpointiniciar_sesion.departamentos_id);
              //console.log(Datosendpointiniciar_sesion.municipios_id);
              //console.log(Datosendpointiniciar_sesion.municipios_nombre);
              //console.log(Datosendpointiniciar_sesion.departamentos_nombre);
              //console.log(Datosendpointiniciar_sesion.entidad);


              //en esta parte tendre que mandarle la informacion de respuesta.datos que es una lista
              this.servicio.AlmacenarUsuarioContraseniaLocalStorage(usuario,clave);
              this.servicio.changeDatos(Lista_Datosendpointiniciar_sesion);
              this.router.navigate(['/seguridad/login-esquemas']);


              //de objetos de tipo Datosendpointiniciar_sesionModel a un componente nuevo para elejir
              //con que database se quiere loguear. sabiendo que respuesta.datos trae la informacion de las db existentes







            }else{
              this.toast.error({detail:"ERROR SERVIDOR",summary:"SIN DATOS",duration:5000, position:'topCenter'});
            }



          }else{
            this.toast.error({detail:"ERROR",summary:"Usuario no identificado",duration:5000, position:'topCenter'});
          }
        },
        error: (error: any) => {
          this.toast.error({detail:"ERROR",summary:"Error en el servidor",duration:5000, position:'topCenter'});
        }
     })




    }

  }





  get obtenerFormGroup(){
    return this.fGroup.controls;
  }














}
