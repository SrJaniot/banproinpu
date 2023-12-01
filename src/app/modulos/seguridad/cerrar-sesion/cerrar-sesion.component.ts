import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { SeguridadService } from '../../../servicios/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrl: './cerrar-sesion.component.css'
})
export class CerrarSesionComponent {
  constructor(
    private router: Router,
    private toast: NgToastService,
    private servicioSeguridad: SeguridadService
  ) {}

  ngOnInit(): void {
    this.cerrarSesion();
  }

  cerrarSesion(){
    this.servicioSeguridad.CerrarSesion();
    this.servicioSeguridad.RemoverDatosUsuarioIdentificado();
    this.router.navigate(['']);
    this.toast.success({detail:"Sesion cerrada",summary:"Sesion cerrada",duration:5000, position:'topCenter'});

  }

}
