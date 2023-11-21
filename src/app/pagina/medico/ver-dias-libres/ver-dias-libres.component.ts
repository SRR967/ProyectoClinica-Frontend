import { Component, Input } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';
import { DiaLibreDTO } from 'src/app/modelo/dto/medico/DiaLibreDto';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-ver-dias-libres',
  templateUrl: './ver-dias-libres.component.html',
  styleUrls: ['./ver-dias-libres.component.css']
})
export class VerDiasLibresComponent {

  verDiasLibres: DiaLibreDTO[]=[]
  alertaMedico!:Alerta


  constructor(private medicoService: MedicoService, private tokenService: TokenService) {
    this.getVerDiasLibres();
  }


  getVerDiasLibres(){
    let cedula = this.tokenService.getCodigo();

    this.medicoService.getVerDiasLibres(cedula).subscribe({
      next: data => {
        this.verDiasLibres = data.respuesta;
      },
      error: error => {
        this.alertaMedico={mensaje:error.error.respuesta,tipo:"danger"};
      }
  });
}
}
