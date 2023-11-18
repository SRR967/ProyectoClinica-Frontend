import { Component } from '@angular/core';

@Component({
  selector: 'app-paciente-inicio',
  templateUrl: './paciente-inicio.component.html',
  styleUrls: ['./paciente-inicio.component.css']
})
export class PacienteInicioComponent {
  // Variable para controlar la visibilidad de inicioPacienteBody
  mostrarInicioPacienteBody: boolean = false;

  // Método para mostrar inicioPacienteBody cuando sea necesario
  mostrarComponenteBody() {
    this.mostrarInicioPacienteBody = true;
  }

  mostrarComponenteGestionPqrs() {
    this.mostrarInicioPacienteBody = true;
  }
}
