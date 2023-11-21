import { Component, Input } from '@angular/core';
import { MedicoService } from '../../../servicios/medico.service';
import { DiaLibreDTO } from 'src/app/modelo/dto/medico/DiaLibreDto';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';
import { ItemDiaLibre } from 'src/app/modelo/dto/medico/ItemDiaLibre';
import { ClinicaService } from 'src/app/servicios/clinica.service';

@Component({
  selector: 'app-ver-dias-libres',
  templateUrl: './ver-dias-libres.component.html',
  styleUrls: ['./ver-dias-libres.component.css']
})
export class VerDiasLibresComponent {

  verDiasLibres: ItemDiaLibre[]=[]
  alertaMedico!:Alerta
  dia: number=0;


  constructor(private medicoService: MedicoService, private tokenService: TokenService, private clinicaService:ClinicaService) {
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
