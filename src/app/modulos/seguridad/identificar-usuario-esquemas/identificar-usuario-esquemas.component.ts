import { Component } from '@angular/core';
import { Datosendpointiniciar_sesionModel } from '../../../Modelos/Datosendpointiniciar_sesion';
import { SeguridadService } from '../../../servicios/seguridad.service';
import { NgToastService } from 'ng-angular-popup';

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
  ) {

  }

  ngOnInit(): void {
    this.servicio.currentDatos.subscribe(datos => this.datos = datos);
    this.toast.info({detail:"INFO",summary:'Elija el esquema a trabajar ',sticky:true, position: 'topRight'});
    console.log(this.datos);

  }



}
