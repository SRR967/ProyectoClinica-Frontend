import { Component, Input } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';


@Component({
  selector: 'app-alerta-paciente',
  templateUrl: './alerta-paciente.component.html',
  styleUrls: ['./alerta-paciente.component.css']
})
export class AlertaPacienteComponent {
  @Input() alertaPaciente!:Alerta  | null;

  public ocultar(){
    this.alertaPaciente = null;
  }

}
