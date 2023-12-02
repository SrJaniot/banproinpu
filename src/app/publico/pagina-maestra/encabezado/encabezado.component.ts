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
    moduloparametros: boolean = false;
    modulopersonas: boolean = false;
    modulorecepcion: boolean = false;
    moduloasignacion: boolean = false;
    modulorevicion: boolean = false;
    moduloregistro: boolean = false;
    modulodevolucion: boolean = false;
    modulocertificacion: boolean = false;
    moduloconsultas: boolean = false;
    moduloinformes: boolean = false;
    moduloplandedesarrollo: boolean = false;
    modulopresupuesto: boolean = false;

    modulovalidacion: boolean = false; //pendiente por agregar en el backend (Jose)



    ngOnInit(): void {
      this.validarModulos();
      // console.log(this.sesionActiva);
      //console.log(this.moduloparametros);
      //console.log(this.modulopersonas);
      //console.log(this.modulorecepcion);
      //console.log(this.moduloasignacion);
      //console.log(this.modulorevicion);
      //console.log(this.moduloregistro);
      //console.log(this.modulodevolucion);
      //console.log(this.modulocertificacion);
      //console.log(this.moduloconsultas);
      //console.log(this.moduloinformes);
      //console.log(this.moduloplandedesarrollo);
      //console.log(this.modulopresupuesto);


    }





    validarModulos() {
      this.servicioSeguridad.ObteberDatosSesion().subscribe({
        next: (datos:SesionModel) => {
          if (datos.token != undefined) {
            this.sesionActiva = true;
            if (datos.modulos) {
              datos.modulos.forEach((modulo) => {
                console.log(modulo.nombre);
                switch (modulo.nombre) {
                  case 'Parametros':
                    this.moduloparametros = true;
                    break;
                  case 'Personas':
                    this.modulopersonas = true;
                    break;
                  case 'Recepción':
                    this.modulorecepcion = true;
                    break;
                  case 'Asignación':
                    this.moduloasignacion = true;
                    break;
                  case 'Revisión':
                    this.modulorevicion = true;
                    break;
                  case 'Registro':
                    this.moduloregistro = true;
                    break;
                  case 'Devolución':
                    this.modulodevolucion = true;
                    break;
                  case 'Certificación':
                    this.modulocertificacion = true;
                    break;
                  case 'Consultas':
                    this.moduloconsultas = true;
                    break;
                  case 'Informes':
                    this.moduloinformes = true;
                    break;
                  case 'Plan de Desarrollo':
                    this.moduloplandedesarrollo = true;
                    break;
                  case 'Presupuesto':
                    this.modulopresupuesto = true;
                    break;
                  default:
                    break;
                }
              });
            }
          } else {
            this.sesionActiva = false;
          }
        },
        error: (error:any) => {
          //console.log(error);
          this.sesionActiva = false;
        }
      });
    }




}
