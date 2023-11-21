import { Component } from '@angular/core';

@Component({
  selector: 'app-medico-inicio',
  templateUrl: './medico-inicio.component.html',
  styleUrls: ['./medico-inicio.component.css']
})
export class MedicoInicioComponent {
  mostrarInicioMedicoBody: boolean= true;
  mostrarListaCitas: boolean=false;
  mostrarListaConsultas: boolean=false;
  mostrarDisponibilidad: boolean= false;
  mostrarDiasLibres: boolean=false;

  mostrarComponenteBody(){
    this.settearFalse();
    this.mostrarInicioMedicoBody= true;
  }

  mostrarComponenteListaCitas(){
    this.settearFalse();
    this.mostrarListaCitas= true;
  }

  mostrarComponenteListaConsultas(){
    this.settearFalse();
    this.mostrarListaConsultas = true;
  }

  mostrarComponenteDisponibilidad(){
    this.settearFalse();
    this.mostrarDisponibilidad= true;
  }

  mostrarComponenteDiasLibres(){
    this.settearFalse();
    this.mostrarDiasLibres= true;
  }

  settearFalse(){
    this.mostrarInicioMedicoBody = false;
    this.mostrarListaCitas = false;
    this.mostrarListaConsultas = false;
    this.mostrarDisponibilidad = false;
    this.mostrarDiasLibres= false;
    
  }

}
