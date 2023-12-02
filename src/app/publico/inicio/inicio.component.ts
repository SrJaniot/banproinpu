import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

    constructor(
      private router: Router,
    ) { }


    sesionActiva: boolean = false;
    imagenUrl: string ="";
    
    // variable para mejorar la estetica del html
    isHovering = false;


    ngOnInit(): void {
      this.validarsesionactiva();
      if (this.sesionActiva) {
        //console.log("sesion activa");
        this.imagenUrl = localStorage.getItem('imagenUrl') || 'https://previews.123rf.com/images/newdesignillustrations/newdesignillustrations1902/newdesignillustrations190206672/125581696-prueba-el-texto-en-una-cinta-diseñado-con-título-blanco-y-franja-azul-banner-de-vector-con.jpg';

      }else{
        //volver a pagina login
        this.router.navigate(['']);
      }

    }

    validarsesionactiva() {
      if (localStorage.getItem('datosUsuario-banproinpu')) {
        this.sesionActiva = true;

      }
      else {
        this.sesionActiva = false;
      }
    }

}
