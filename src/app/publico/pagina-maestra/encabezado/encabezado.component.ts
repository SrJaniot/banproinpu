import { Component } from '@angular/core';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SesionModel } from '../../../Modelos/Sesion.model';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {

    constructor(
      private servicioSeguridad: SeguridadService,
      private router: Router,
      private toast: NgToastService,
    ) { }
    sesionActiva: boolean = false;

    ngOnInit(): void {
      this.ValidarSesionActiva();

    }

    ValidarSesionActiva() {
      this.servicioSeguridad.ObteberDatosSesion().subscribe({


        next: (datos:SesionModel) => {


          if (datos.token != undefined) {
            this.sesionActiva = true;

          }else{
            this.sesionActiva = false;

          }
          //console.log(datos);

        },
        error: (error:any) => {
          //console.log(error);
          this.sesionActiva = false;
        }
      });


    }




}
