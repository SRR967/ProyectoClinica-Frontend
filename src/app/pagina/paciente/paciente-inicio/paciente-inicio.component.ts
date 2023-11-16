import { Component } from '@angular/core';
import { PacienteInicioBodyComponent } from '../paciente-inicio-body/paciente-inicio-body.component';

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
}
