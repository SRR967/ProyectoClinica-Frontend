import { Component } from '@angular/core';

@Component({
  selector: 'app-paciente-inicio',
  templateUrl: './paciente-inicio.component.html',
  styleUrls: ['./paciente-inicio.component.css']
})
export class PacienteInicioComponent {
  // Variable para controlar la visibilidad de inicioPacienteBody
  mostrarInicioPacienteBody: boolean = true;
  mostrarListaPQRS: boolean=false;

  // Método para mostrar inicioPacienteBody cuando sea necesario
  mostrarComponenteBody() {
    this.mostrarInicioPacienteBody = true;
  }

  mostrarComponenteListaPqrs() {
    this.settearFalse();
    this.mostrarListaPQRS = true;
  }

  settearFalse(){

    this.mostrarInicioPacienteBody = false;
    this.mostrarListaPQRS = false;
    
  }
}
