import { Component, Input } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-alerta-medico',
  templateUrl: './alerta-medico.component.html',
  styleUrls: ['./alerta-medico.component.css']
})
export class AlertaMedicoComponent {
  @Input() alertaMedico!:Alerta | null;

  public ocultar(){
    this.alertaMedico = null;
  }

}
