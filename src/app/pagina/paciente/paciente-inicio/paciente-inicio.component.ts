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
  mostrarCrearCita: boolean=false;
  mostrarListaConsulta: boolean=false;

  // Método para mostrar inicioPacienteBody cuando sea necesario
  mostrarComponenteBody() {
    this.mostrarInicioPacienteBody = true;
  }

  mostrarComponenteListaPqrs() {
    this.settearFalse();
    this.mostrarListaPQRS = true;
  }

  mostrarComponenteCrearCita() {
    this.settearFalse();
    this.mostrarCrearCita = true;
  }

  mostrarComponenteListaConsulta(){
    this.settearFalse();
    this.mostrarListaConsulta= true;
  }

  settearFalse(){

    this.mostrarInicioPacienteBody = false;
    this.mostrarListaPQRS = false;
    this.mostrarCrearCita = false;
    this.mostrarListaConsulta = false;
    
  }
}
