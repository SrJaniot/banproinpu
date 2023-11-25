import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  get obtenerFormGroup(){
    return this.fGroup.controls;
  }












}
