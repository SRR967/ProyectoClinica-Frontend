import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

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
  mostrarActualizarPaciente: boolean=false;
  alerta!:Alerta

  constructor(private tokenService: TokenService, private pacienteService: PacienteService){}

  // Método para mostrar inicioPacienteBody cuando sea necesario
  mostrarComponenteBody() {
    this.settearFalse();
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

  mostrarComponenteActualizarPaciente(){
    this.settearFalse();
    this.mostrarActualizarPaciente= true;
  }

  settearFalse(){

    this.mostrarInicioPacienteBody = false;
    this.mostrarListaPQRS = false;
    this.mostrarCrearCita = false;
    this.mostrarListaConsulta = false;
    this.mostrarActualizarPaciente= false;
    
  }

  public borrarPerfil(){
    let i = this.tokenService.getCodigo();
    this.pacienteService.eliminarPaciente(i).subscribe({
      next: data =>{
        this.alerta = {mensaje: data.respuesta, tipo: "danger"};
      },
      error: error => {
        this.alerta = { mensaje: error.error, tipo: "danger" };
      }
    });
  }
}
