import { Component } from '@angular/core';
import { Datosendpointiniciar_sesionModel } from '../../../Modelos/Datosendpointiniciar_sesion';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificar-usuario-esquemas',
  templateUrl: './identificar-usuario-esquemas.component.html',
  styleUrl: './identificar-usuario-esquemas.component.css'
})
export class IdentificarUsuarioEsquemasComponent {
   datos!: Datosendpointiniciar_sesionModel[] ;

  constructor(
    private servicio: SeguridadService,
    private toast: NgToastService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.servicio.currentDatos.subscribe(datos => this.datos = datos);
    this.toast.info({detail:"INFO",summary:'Elija el esquema a trabajar ',sticky:true, position: 'topRight'});
    //console.log(this.datos);

  }



  loginConSquema(esquema: string ){
    const key= localStorage.getItem('key');
    const keyobjeto=JSON.parse(key!);
    const usuario=keyobjeto.usuario;
    const clave=keyobjeto.clave;



    //console.log(usuario);
    //console.log(clave);
    //console.log(esquema);

    this.servicio.IdentificarUsuarioEsquemas(usuario,clave,esquema).subscribe({
      next: (respuesta: any) => {
        if(respuesta && respuesta.CODIGO == 1){
          //this.toast.success({detail:"EXITO",summary:"Usuario identificado",duration:5000, position:'topCenter'});
          //console.log(respuesta);
          //console.log(respuesta.CODIGO);
          //console.log(respuesta.MENSAJE);
          //console.log(respuesta.DATOS);
          if (respuesta.DATOS) {
            if (this.servicio.AlmacenarDatosUsuarioIdentificadoLocalStorage(respuesta)) {
              this.router.navigate(['/inicio']);
              this.toast.success({detail:"EXITO",summary:"Bienvenido al sistema",duration:5000, position:'topCenter'});


            }




          }
        }

      },
      error: (error: any) => {
        this.toast.error({detail:"ERROR",summary:"Error al identificar el usuario",duration:5000, position:'topCenter'});

      }

    })


  }



}
